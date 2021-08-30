const express = require('express');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');
//app.set('views', '//location');

// listen to requests
app.listen(3000);

// home page
app.get('/', (req, res) => {
  //res.send('<p>home page</p>');
  //res.sendFile('./views/index.html', { root: __dirname });
  const blogs = [
    { title: 'How to Play Mario', snippet: 'W,A,S,D to move around' },
    { title: 'How to Download Mario', snippet: 'You have to have win32' },
    { title: 'How to Defeat Mario', snippet: 'Jumping on enemies' },
  ];
  res.render('index', { heading: 'All Blogs', blogs });
});

// about page
app.get('/about', (req, res) => {
  //res.send('<p>about page</p>');
  //res.sendFile('./views/about.html', { root: __dirname });
  res.render('about', { heading: 'About Page' });
});

// create blog page
app.get('/blogs/create', (req, res) => {
  res.render('create', { heading: 'Create Blog Page' });
});

// redirects
// app.get('/about-us', (req, res) => {
//   res.redirect('/about');
// });

// 404 page ( if it does not match the requests above )
app.use((req, res) => {
  //res.status(404).sendFile('./views/404.html', { root: __dirname });
  res.status(404).render('404', { heading: '404 - ERROR PAGE' });
});
