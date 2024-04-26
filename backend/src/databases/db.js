const mongoose = require("mongoose")
const User = require("./userSchema")
const LearningData = require("./data.json")


mongoose.connect("mongodb://localhost27017/linguist")









module.exports = {
    User,
    LearningData
}