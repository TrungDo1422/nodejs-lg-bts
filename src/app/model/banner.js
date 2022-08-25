const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Banner = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    content: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Banner', Banner);
