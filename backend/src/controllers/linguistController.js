
const linguistServices = require("../services/linguistServices")

const createUser = async (req, res) => {
    try {
        await linguistServices.createUser(req, res);
    } catch (err) {
        console.error("Error in createUser controller:", err);
        res.status(500).json({ msg: "Server error" });
    }
};

const confirmUser = async (req, res) => {
    try {
        await linguistServices.confirm(req, res);
    } catch (err) {
        console.error("Error in confirmUser controller:", err);
        res.status(500).json({ msg: "Server error" });
    }
};

const loginUser = async (req, res) => {
    try {
        await linguistServices.login(req, res);
    } catch (err) {
        console.error("Error in loginUser controller:", err);
        res.status(500).json({ msg: "Server error" });
    }
};

const getAllData = async (req, res) => {
    try {
        await linguistServices.getAllData(req, res);
    } catch (err) {
        console.error("Error in getAllData controller:", err);
        res.status(500).json({ msg: "Server error" });
    }
};


const updateProgress = async (req, res) => {
    try {
        await linguistServices.progress(req, res);
    } catch (err) {
        console.error("Error in updateProgress controller:", err);
        res.status(500).json({ msg: "Server error" });
    }
};


module.exports = {
    createUser,
    confirmUser,
    loginUser,
    getAllData,
    updateProgress
};
