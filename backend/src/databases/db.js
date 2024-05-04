require('dotenv').config();
const mongoose = require('mongoose');
const Schema = require('./userSchema');
const LearningData = require('./data.json');


require('dotenv').config();

const MONGODB_URI = "mongodb+srv://admin:admin@cluster0.zqjlupr.mongodb.net/";

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

const User = mongoose.model('User', Schema);



module.exports = {
  User,
  LearningData
};
