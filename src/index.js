// require('dotenv').config({ path: __dirname + '/.env' });
require('dotenv').config();

const db = require('./config/db');
const express = require('express');
var cors = require('cors');

const banner = require('./routes/banner');
const about = require('./routes/about');
const notice = require('./routes/noticeBoard');
const categories = require('./routes/categories');

// bodyParser Middelware
const app = express();
app.use(express.json()); // we need to tell server to use json as well
app.use(cors());

//connect to DB
db.connect();

app.get('/', (req, res) => {
  res.send('API working');
});

//use router
app.use('/banner', banner);
app.use('/about', about);
app.use('/notice', notice);
app.use('/categories', categories);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Sever run at http://localhost:${PORT}`));
