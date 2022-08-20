const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const popularSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    popular: [
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
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('popular', popularSchema);
