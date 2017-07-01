'use strict';

const Models = require('../models');
var fs = require('fs');
var path = require('path');

module.exports = {
	getAllGames(req, res) {
		Models.Games.find({}, (err, news)=>{
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
//     "_id" : ObjectId("5957a18c572c85530d1c3a7e"),
//     "title" : "Phasellus scelerisque elit et congue luctus",
//     "description" : "Praesent nec tellus eu sem condimentum placerat non et tortor. In eget aliquet metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra",
//     "imgUrl" : "https://epam-education.herokuapp.com/img/games/game1.jpg",
//     "platforms" : [ 
//         "PC", 
//         "PS4", 
//         "Xbox One"
//     ],
//     "likes" : 24,
//     "comments" : 21,
//     "rating" : 8.2
// }

// /* 2 */
// {
//     "_id" : ObjectId("5957a1f5572c85530d1c3a7f"),
//     "title" : "Etiam tincidunt dolor scelerisque",
//     "description" : "Felis dapibus. Ut vitae tortor et nibh facilisis imperdiet eget eu ligula. Sed porttitor purus justo, in consectetur nulla fermentum sit amet. Aenean ac condime",
//     "imgUrl" : "https://epam-education.herokuapp.com/img/games/game2.jpg",
//     "platforms" : [ 
//         "PC", 
//         "PS4"
//     ],
//     "likes" : 20,
//     "comments" : 17,
//     "rating" : 9.5
// }

// /* 3 */
// {
//     "_id" : ObjectId("5957a2b4572c85530d1c3a81"),
//     "title" : "Suscipit, dui tortor pulvinar enim, vel laoreet libero",
//     "description" : "Amet massa sollicitudin eleifend ac et augue. Praesent at vestibulum lacus, in consequat nibh. Nam commodo elit ac nisl euismod, et porttitor felis dapibus. Ut vit",
//     "imgUrl" : "https://epam-education.herokuapp.com/img/games/game3.jpg",
//     "platforms" : [ 
//         "PC", 
//         "PS4", 
//         "Xbox One"
//     ],
//     "likes" : 30,
//     "comments" : 24,
//     "rating" : 9.9
// }

// /* 4 */
// {
//     "_id" : ObjectId("5957a40a572c85530d1c3a83"),
//     "title" : "Vestibulum metus dolor, convallis nec facilisis",
//     "description" : "Ornare tempus. Pellentesque vehicula metus at erat tincidunt mattis. Quisque placerat lorem commodo ligula viverra, id imperdiet arcu volutpat",
//     "imgUrl" : "https://epam-education.herokuapp.com/img/games/game4.jpg",
//     "platforms" : [ 
//         "PC", 
//         "PS4"
//     ],
//     "likes" : 21,
//     "comments" : 10,
//     "rating" : 7.2
// }