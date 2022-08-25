const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoriesSchema = new Schema(
  {
    iconUrl: {
      type: String,
      // require: true,
    },
    content: {
      type: String,
      require: true,
    },
    course: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('categories', categoriesSchema);
