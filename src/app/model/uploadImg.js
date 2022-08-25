const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const uploadImgSchema = new Schema({
  uploadImg: {
    type: String,
    // require:true
  },
});

module.exports = mongoose.model('uploadImg', uploadImgSchema);
