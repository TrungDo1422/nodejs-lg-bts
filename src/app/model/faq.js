const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const faqSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  faq: [
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
   
  ],
  linkVideo: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model('faq', faqSchema);
