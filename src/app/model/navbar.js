const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const navbarSchema = new Schema({
  logoUrl: {
    type: String,
    // require:true
  },
  content: {
    type: String,
    require: true,
  },
  img: [
    {
      imgUrl: {
        type: String,
        // require: true,
      },
    },
  ],
  map: {
    type: String,
    // require: true,
  },
});

module.exports = mongoose.model('navbar', navbarSchema);
