const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noticeSchema = new Schema(
  {
    stt: {
      type: Number,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('notice', noticeSchema);
