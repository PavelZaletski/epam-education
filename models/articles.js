'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articlesSchema = new Schema({
	title: String,
	description: String,
	text: String,
	date: Date,
	avatarUrl: String,
	likes: Number,
	comments: Number
});

module.exports = mongoose.model('Articles', articlesSchema);