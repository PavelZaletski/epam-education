'use strict';

var express = require('express');
var router = express.Router();
var news = require('../controllers/articles');

router.get('/', news.getAllArticles);

module.exports = router;
