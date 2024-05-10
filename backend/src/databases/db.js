require('dotenv').config();
const mongoose = require('mongoose');
const Schema = require('./userSchema');
const LearningData = require('./data.json');


require('dotenv').config();

const MONGODB_URI = "mongodb+srv://2023mt93431:W3PDZdlgsH1dWS4X@cluster0.j7uffng.mongodb.net/";

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

module.exports =  mongoose.model('users', Schema);
