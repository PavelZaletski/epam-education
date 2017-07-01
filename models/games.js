'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gamesSchema = new Schema({
	title: String,
	description: String,
	imgUrl: String,
	rating: Number,
	platforms: [String],
	likes: Number,
	comments: Number
});

module.exports = mongoose.model('Games', gamesSchema);