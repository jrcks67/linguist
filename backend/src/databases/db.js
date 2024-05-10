require('dotenv').config();
const mongoose = require('mongoose');
const Schema = require('./userSchema');
const LearningData = require('./data.json');


require('dotenv').config();

const MONGODB_URI = "mongodb://localhost:27017/linguist";

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

module.exports =  mongoose.model('users', Schema);
