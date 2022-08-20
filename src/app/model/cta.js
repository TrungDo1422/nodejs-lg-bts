const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ctaSchema = new Schema(
  {
    imgUrl:{
      type: String,
      // require: true,
    },
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

module.exports = mongoose.model('cta', ctaSchema);
