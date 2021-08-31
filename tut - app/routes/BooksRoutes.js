const express = require('express');
const BooksController = require('../controllers/BooksController');
const router = express.Router();

router.get('/', BooksController.Books_info);

module.exports = router;
