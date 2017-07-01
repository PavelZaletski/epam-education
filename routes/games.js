'use strict';

var express = require('express');
var router = express.Router();
var news = require('../controllers/games');

router.get('/', news.getAllGames);

module.exports = router;
