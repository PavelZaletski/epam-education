'use strict';

const Models = require('../models');
var fs = require('fs');
var path = require('path');

module.exports = {
	getAllTrailers(req, res) {
		Models.Trailers.find({}, (err, news)=>{
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

// /* 1 */
// {
//     "_id" : ObjectId("5957adec572c85530d1c3a94"),
//     "title" : "Aenean elementum id ipsum vitae cursus",
//     "genre" : [ 
//         "Action", 
//         "Pixel"
//     ],
//     "imgUrl" : "https://epam-education.herokuapp.com/img/trailers/trailer1.jpg"
// }

// /* 2 */
// {
//     "_id" : ObjectId("5957ae4d572c85530d1c3a96"),
//     "title" : "Condimentum nibh et tristique justo lectus",
//     "genre" : [ 
//         "Action"
//     ],
//     "imgUrl" : "https://epam-education.herokuapp.com/img/trailers/trailer2.jpg"
// }

// /* 3 */
// {
//     "_id" : ObjectId("5957ae83572c85530d1c3a97"),
//     "title" : "Duis tellus nunc, scelerisque sit amet enim",
//     "genre" : [ 
//         "Action"
//     ],
//     "imgUrl" : "https://epam-education.herokuapp.com/img/trailers/trailer3.jpg"
// }

// /* 4 */
// {
//     "_id" : ObjectId("5957aec2572c85530d1c3a98"),
//     "title" : "Pharetra blandit. Vivamus condimentum feugiat neque",
//     "genre" : [ 
//         "Action", 
//         "RPG"
//     ],
//     "imgUrl" : "https://epam-education.herokuapp.com/img/trailers/trailer4.jpg"
// }

// /* 5 */
// {
//     "_id" : ObjectId("5957af1e572c85530d1c3a9a"),
//     "title" : "Fusce aliquam condimentum eleifend aenean semper",
//     "genre" : [ 
//         "Action", 
//         "Pixel"
//     ],
//     "imgUrl" : "https://epam-education.herokuapp.com/img/trailers/trailer5.jpg"
// }

// /* 6 */
// {
//     "_id" : ObjectId("5957af39572c85530d1c3a9b"),
//     "title" : "Quisque egestas nisi lorem et laoreet diam sagittis",
//     "genre" : [ 
//         "Action", 
//         "Pixel"
//     ],
//     "imgUrl" : "https://epam-education.herokuapp.com/img/trailers/trailer6.jpg"
// }