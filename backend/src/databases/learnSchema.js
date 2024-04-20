const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wordSchema = new Schema({
  term: {
    type: String,
    required: true,
  },
  translation: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    default: 'General',
  },
});

const phraseSchema = new Schema({
  phrase: {
    type: String,
    required: true,
  },
  translation: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    default: 'General',
  },
});

const sentenceSchema = new Schema({
  sentence: {
    type: String,
    required: true,
  },
  translation: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    default: 'General',
  },
});

const LearningData = mongoose.model('LearningData', {
  words: [wordSchema],
  phrases: [phraseSchema],
  sentences: [sentenceSchema],
});

module.exports = LearningData;
