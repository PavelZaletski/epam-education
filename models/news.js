'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = new Schema({
	title: String,
	description: String,
	imgUrl: String
});

module.exports = mongoose.model('News', newsSchema);