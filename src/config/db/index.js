//trungdo
//XQBiWTJjHcc2zyEz

const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect(process.env.DB_CONNECT, {
      useNewUrlParser: true,
      useUniFiedTopology: true,
    });

    console.log('connect successfully!!!');
  } catch (error) {
    console.log('connect failure!!!');
  }
} 

module.exports = { connect };
