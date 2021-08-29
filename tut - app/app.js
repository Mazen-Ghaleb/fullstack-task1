const express = require('express');

// express app
const app = express();

// listen to requests
app.listen(3000);

// home page
app.get('/', (req, res) => {
  //res.send('<p>home page</p>');
  res.sendFile('./views/index.html', { root: __dirname });
});

// about page
app.get('/about', (req, res) => {
  //res.send('<p>about page</p>');
  res.sendFile('./views/about.html', { root: __dirname });
});

// redirects
app.get('/about-us', (req, res) => {
  res.redirect('/about');
});

// 404 page ( if it does not match the requests above )
app.use((req, res) => {
  res.status(404).sendFile('./views/404.html', { root: __dirname });
});
