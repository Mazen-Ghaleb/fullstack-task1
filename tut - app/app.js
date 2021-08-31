const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
const BooksRoutes = require('./routes/BooksRoutes');

var axios = require('axios').default;

// express app
const app = express();

// connect to mongodb
const dbURI = require('./mongooseCredientials');
const { render } = require('ejs');
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(process.env.PORT || 3000))
  .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// routes
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

// about page
app.get('/about', (req, res) => {
  res.render('about', { heading: 'About Page' });
});

// blog route
app.use('/blogs', blogRoutes);

// Books route
app.use('/Books', BooksRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { heading: 'ERROR 404' });
});
