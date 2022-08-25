const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const navbarSchema = new Schema({
  logoUrl: {
    type: String,
    // require:truea
  },
  content: {
    type: String,
    require: true,
  },
  map: {
    type: String,
    // require: true,
  },
});

module.exports = mongoose.model('navbar', navbarSchema);
