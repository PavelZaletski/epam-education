'use strict';

var express = require('express');
var router = express.Router();
var news = require('../controllers/news');

router.get('/', news.getAllNews);

module.exports = router;
