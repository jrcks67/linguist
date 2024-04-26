const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  progress: { 
      progressMade: {type: String, required: true, default: 0}, // stores the percentage of progress based on total content available(words+phrases+sentences) and the content displayed to the user
      displayedContent: {
        wordsDisplayed: [{ type: String, required: true}], // stores an array of objects that contains all the words displayed to the user
        phrasesDisplayed: [{type: String, required: true}], // stores an array of objects that contains all the phrases displayed to the user
        sentenceDisplayed: [{type:String, required: true}] // stores an array of objects that contains all the sentencesdisplayed to the user
      }
    }
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
