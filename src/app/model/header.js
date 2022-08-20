const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const headerSchema = new Schema({
  logoUrl: {
    type: String,
    // require:true
  },
  header: [
    {
      item: {
        type: String,
        // require: true,
      },
      plus: [
        {
          plusCampus: {
            type: String,
          },
        },
      ],
    },
  ],
});

module.exports = mongoose.model('header', headerSchema);
