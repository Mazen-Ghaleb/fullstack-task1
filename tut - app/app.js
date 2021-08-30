const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

// express app
const app = express();

// connect to mongodb
const dbURI = require('./mongooseCredientials');
const { render } = require('ejs');
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000) /*console.log('connected to db')*/)
  .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));

app.use(morgan('dev'));

// like morgan we can use helmet for security

// mongoose and mongo sandbox routes
// app.get('/add-blog', (req, res) => {
//   const blog = new Blog({
//     title: 'new blog3',
//     snippet: 'about my new blog',
//     body: 'more about my new blog',
//   });
//   blog
//     .save()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get('/all-blogs', (req, res) => {
//   Blog.find()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get('/single-blog', (req, res) => {
//   Blog.findById('612d66386a8f99cdb293be9d')
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// home page
app.get('/', (req, res) => {
  // const blogs = [
  //   { title: 'How to Play Mario', snippet: 'W,A,S,D to move around' },
  //   { title: 'How to Download Mario', snippet: 'You have to have win32' },
  //   { title: 'How to Defeat Mario', snippet: 'Jumping on enemies' },
  // ];
  // res.render('index', { heading: 'All Blogs', blogs });
  res.redirect('/blogs');
});

// about page
app.get('/about', (req, res) => {
  res.render('about', { heading: 'About Page' });
});

app.get('/blogs', (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render('index', { heading: 'All Blogs', blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

// create blog page
app.get('/blogs/create', (req, res) => {
  res.render('create', { heading: 'Create a new Blog' });
});

// 404 page ( if it does not match the requests above )
app.use((req, res) => {
  res.status(404).render('404', { heading: '404 - ERROR PAGE' });
});
