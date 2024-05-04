const mongoose = require("mongoose")
const User = require("../databases/userSchema");
const data = require("../databases/data.json");

mongoose.connect("mongodb://localhost:27017/linguist")

const users = (req) => {
const dataUser = new User({
    username:req.body.username,
    email:req.body.email,
    password:req.body.password
});
const response = dataUser.save();
return response;
}

const getUser = () => {

} 
const getAllContent = () => {
    return data;
}

const progress = () => {

}


module.exports = {
    users,
    getUser,
    getAllContent,
}