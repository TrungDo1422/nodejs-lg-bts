const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testimonialSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  testimonial: [
    {
      content: {
        type: String,
        require: true,
      },
      avataUrl: {
        type: String,
        // require:true
      },
      name: {
        type: String,
        require: true,
      },
      Plus: {
        type: String,
        require: true,
      },
    },
  ],
});

module.exports = mongoose.model('testimonial', testimonialSchema);
