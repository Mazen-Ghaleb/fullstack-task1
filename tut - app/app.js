const express = require('express');
const morgan = require('morgan');
// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// listen to requests
app.listen(3000);

// middleware & static files
app.use(express.static('public'));

app.use(morgan('dev'));

// helmet --> used for security
// morgan --> is better than code below
// app.use((req, res, next) => {
//   console.log('new request made:');
//   console.log('host: ', req.hostname);
//   console.log('path: ', req.path);
//   console.log('method: ', req.method);
//   next();
// });

// home page
app.get('/', (req, res) => {
  const blogs = [
    { title: 'How to Play Mario', snippet: 'W,A,S,D to move around' },
    { title: 'How to Download Mario', snippet: 'You have to have win32' },
    { title: 'How to Defeat Mario', snippet: 'Jumping on enemies' },
  ];
  res.render('index', { heading: 'All Blogs', blogs });
});

// app.use((req, res, next) => {
//   console.log('test2');
//   next();
// });

// about page
app.get('/about', (req, res) => {
  res.render('about', { heading: 'About Page' });
});

// create blog page
app.get('/blogs/create', (req, res) => {
  res.render('create', { heading: 'Create a new Blog' });
});

// 404 page ( if it does not match the requests above )
app.use((req, res) => {
  res.status(404).render('404', { heading: '404 - ERROR PAGE' });
});
