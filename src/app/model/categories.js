const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoriesSchema = new Schema({
  iconUrl: {
    type: String,
    // require: true,
  },
  title: {
    type: String,
    require: true,
  },
  course: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model('categories', categoriesSchema);
