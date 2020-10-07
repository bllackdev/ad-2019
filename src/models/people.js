const mongoose = require('../database');

const PeopleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  friend: {
    type: String,
    required: false,
  },
});

const People = mongoose.model('People', PeopleSchema);

module.exports = People;