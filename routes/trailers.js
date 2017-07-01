'use strict';

var express = require('express');
var router = express.Router();
var news = require('../controllers/trailers');

router.get('/', news.getAllTrailers);

module.exports = router;