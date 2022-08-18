require('dotenv').config({ path: __dirname + '/.env' });

const db = require('./config/db');
const express = require('express');
var cors = require('cors');

// bodyParser Middelware
const app = express();
app.use(express.json()); // we need to tell server to use json as well
app.use(cors());

//connect to DB
db.connect();

app.get('/', (req, res) => {
  res.send('API working');
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Sever run at http://localhost:${PORT}`));
