const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const faqSchema = new Schema(
  {
    content: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('faq', faqSchema);
