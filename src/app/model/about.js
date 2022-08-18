const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AboutSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model('About', AboutSchema);
