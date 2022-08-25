const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const popularSchema = new Schema(
  {
    imgUrl: {
      type: String,
      // require:true
    },
    content: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('popular', popularSchema);
