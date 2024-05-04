require('dotenv').config();
const mongoose = require('mongoose');
const Schema = require('./userSchema');
const LearningData = require('./data.json');


require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})
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
