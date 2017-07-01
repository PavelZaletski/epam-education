'use strict';

const Models = require('../models');
var fs = require('fs');
var path = require('path');

module.exports = {
	getAllArticles(req, res) {
		Models.Articles.find({}, (err, news)=>{
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

// {
//     "_id" : ObjectId("5957c121572c85530d1c3aab"),
//     "title" : "Phasellus scelerisque elit et congue luctus",
//     "description" : "Praesent nec tellus eu sem condimentum placerat non et tortor. In eget aliquet metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra",
//     "text" : "Nunc ut massa et urna blandit elementum vitae a metus. Nulla accumsan egestas tristique. Duis dapibus varius arcu, et convallis metus convallis ut. Sed varius enim vel erat suscipit, congue sagittis ligula elementum. In hac habitasse platea dictumst. Nunc eget eleifend massa, et lacinia tellus. Aliquam at neque pulvinar, tempor sem vitae, tempor arcu. Quisque a tincidunt est",
//     "avatarUrl" : "https://epam-education.herokuapp.com/img/authors/author1.jpg",
//     "likes" : 24,
//     "comments" : 21,
//     "date" : 1498922897832,
//     "author": "John Smith"
// }

// /* 2 */
// {
//     "_id" : ObjectId("5957c1c7572c85530d1c3aac"),
//     "title" : "Habitant morbi tristique senectus et netus et malesuada",
//     "description" : "Euismod quam. Duis lacinia commodo justo non mollis. Curabitur gravida lobortis lorem quis sodales",
//     "text" : "Vitae a metus. Nulla accumsan egestas tristique. Duis dapibus varius arcu, et convallis metus convallis ut. Sed varius enim vel erat suscipit, congue sagittis ligula elementum. In hac habitasse platea dictumst. Nunc eget eleifend massa, et lacinia tellus. Aliquam at neque pulvinar, tempor sem vitae, tempor arcu. Quisque a tincidunt est.",
//     "avatarUrl" : "https://epam-education.herokuapp.com/img/authors/author2.jpg",
//     "likes" : 30,
//     "comments" : 18,
//     "date" : 1494932197173,
//     "author": "William Stone"
// }

// {
//     "title" : "Blandit justo enim aenean quis ultricies arcu",
//     "description" : "Morbi id imperdiet tellus. In sit amet finibus diam. Integer porttitor eros sit amet nulla vestibulum, ut varius erat pulvinar",
//     "text" : "Nulla facilisi. Praesent blandit ligula sed ipsum euismod vulputate. Ut vulputate magna at felis ornare, sit amet mattis ex venenatis. Etiam viverra eros nec magna cursus molestie. Maecenas elit lectus, facilisis se",
//     "avatarUrl" : "https://epam-education.herokuapp.com/img/authors/author3.jpg",
//     "likes" : 12,
//     "comments" : 9,
//     "date" : 1496235299481,
//     "author": "Bill Roberts"
// }

// {
//     "title" : "vulputate magna at felis ornare, sit amet mattis ex venenatis",
//     "description" : "Nunc malesuada a risus vel, semper molestie nibh. Sed at tempor mi. Sed blandit justo enim. Aenean quis ultricies arcu. Donec elementum mi a urna egestas, cursus",
//     "text" : "Luctus id cras elit tellus, pellentesque et suscipit ut, dictum ac turpis. Quisque dapibus, mauris quis tincidunt tincidunt, arcu libero fringilla nibh, aliquet aliquet ligula ligula id orci. Aliquam erat volutpat. Phasellus iaculis arcu a bibendum porta. Ut eget tristique mi, in cursus ante.",
//     "avatarUrl" : "https://epam-education.herokuapp.com/img/authors/author4.jpg",
//     "likes" : 25,
//     "comments" : 14,
//     "date" : 1496836273498,
//     "author": "Kim Douglas"
// }

// {
//     "title" : "Accumsan augue sapien nec ex. Etiam a imperdiet urna. Phasellus eget metus ac mauris tempus",
//     "description" : "sit amet nisi ac purus tincidunt pulvinar eu non ipsum. Ut at nibh et tortor vehicula tempus at eu urna. Quisque cursus, massa id tempus ultricies, ex tellus maximus",
//     "text" : "Auctor luctus. Etiam ultricies sapien ut lorem ultrices, vel venenatis justo fermentum. Nam lobortis ultrices dui id euismod. Vivamus sollicitudin molestie lectus, in finibus nisi fringilla ac",
//     "avatarUrl" : "https://epam-education.herokuapp.com/img/authors/author5.jpg",
//     "likes" : 19,
//     "comments" : 11,
//     "date" : 1497486849335,
//     "author": "Tom Jones"
// }

// {
//     "title" : "Scelerisque in odio ut suscipit. Nam vitae felis vitae efficitur a et arcu. Fusce suscipit euismod diam",
//     "description" : "cursus, massa id tempus ultricies, ex tellus maximus risus, accumsan accumsan augue sapien nec ex. Etiam a imperdiet urna. Phasellus eget metus",
//     "text" : "Proin nec erat id nulla pretium ultrices in eu nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin rhoncus suscipit viverra. Duis non euismod quam. Duis lacinia commodo justo non mollis. Curabitur gravida lobortis lore",
//     "avatarUrl" : "https://epam-education.herokuapp.com/img/authors/author3.jpg",
//     "likes" : 35,
//     "comments" : 28,
//     "date" : 1497985938593,
//     "author": "Bill Roberts"
// }