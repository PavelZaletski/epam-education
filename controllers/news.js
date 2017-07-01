'use strict';

const Models = require('../models');
var fs = require('fs');
var path = require('path');

module.exports = {
	getAllNews(req, res) {
		Models.News.find({}, (err, news)=>{
			if (err) { 
				throw err;
			}

			if (news) {
				res.json(news);
			} else {
				res.json({error: 'not found'});
			}
		});
	}
};