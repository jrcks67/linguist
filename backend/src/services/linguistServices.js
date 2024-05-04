const User = require("../databases/db");
const data = require("../databases/data.json");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";
const nodemailer = require("nodemailer");


async function userExists(username) {
    const user = await User.findOne({ username });
    return user !== null;
}

const decode = (token) => {
    const decodedData = jwt.verify(token,jwtPassword)
    return decodedData.username
}

function generateConfirmationToken(username) {
    return jwt.sign({ username }, jwtPassword);
}



const createUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        if (await userExists(username)) {
            return res.status(400).json({ msg: "User already exists" });
        }

        const newUser = new User({ username, email, password });
        await newUser.save();
        const confirmationToken = generateConfirmationToken(username);
        await sendConfirmationEmail(email, confirmationToken);

        res.status(201).json({ msg: "User created. Please check your email for confirmation." });
    } catch (err) {
        console.error("Error creating user:", err);
        res.status(500).json({ msg: "Server error" });
    }
};

async function sendConfirmationEmail(email, confirmationToken) {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'zero2linguist@gmail.com',
            pass: 'linguist123'
        }
    });

    const mailOptions = {
        from: 'zero2linguist@gmail.com',
        to: email,
        subject: 'Confirm your registration',
        html: `
            <p>Thank you for registering with us!</p>
            <p>Please click <a href="http://localhost:3000/confirm/${confirmationToken}">here</a> to confirm your registration.</p>
        `
    };

    await transporter.sendMail(mailOptions);
}

const confirm = async (req, res) => {
    const { token } = req.params;

    try {

        const decoded = jwt.verify(token, jwtPassword);
        const { username } = decoded;

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }


        user.confirmed = true;
        await user.save();

        res.redirect('/login'); 
    } catch (err) {
        console.error('Error confirming user:', err);
        res.status(500).json({ msg: 'Server error' });
    }
};

const login = async (req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    try {
        if(!userExists(username)){
            res.status(400).json({msg:"user doesnt exist"})
        }
        const user = await User.findOne({ username });
        const token = jwt.sign({username},jwtPassword)
        res.send({user,token})
        
    }
    catch(err){
        res.json({msg:"User doesn't exist"})
    }
}


const getAllData = async (req,res) => {
    const token = req.headers.authorization
    try {
        const username = decode(token)
        if(await userExists(username)) {
            res.send(data)
        }       
    }
    catch(err) {
        res.status(400).error(err)
    }
}


const progress = async (req,res) => {
    const token = req.headers.authorization;
    const {progress} = req.body;
    try {
        const username = decode(token);
        if(await userExists(username)) {
            user = await User.findOne({username})
            user.progress = progress;
            await user.save()

        }
    } catch (err){
        res.error(err)
    }
}



module.exports = {
    createUser,
    confirm,
    login,
    getAllData,
    progress
};
