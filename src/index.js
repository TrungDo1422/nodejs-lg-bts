require('dotenv').config();

const db = require('./config/db');
const express = require('express');
var cors = require('cors');

const banner = require('./routes/banner');
const about = require('./routes/about');
const notice = require('./routes/noticeBoard');
const categories = require('./routes/categories');
const popular = require('./routes/popular');
const cta = require('./routes/cta');
const faq = require('./routes/faq');
const testimonial = require('./routes/testimonial');
const navbar = require('./routes/navbar');
const upload = require('./routes/upload');
const uploadImg = require('./routes/uploadImg');

// bodyParser Middelware
const app = express();
app.use(express.json()); // we need to tell server to use json as well
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // We're telling express to use CORS

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
app.use('/popular', popular);
app.use('/cta', cta);
app.use('/faq', faq);
app.use('/testimonial', testimonial);
app.use('/navbar', navbar);
app.use('/uploadImg', uploadImg);
app.use('/upload', upload);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Sever run at http://localhost:${PORT}`));
