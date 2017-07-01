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

// /* 1 */
// {
//     "_id" : ObjectId("5957613f572c85530d1c3a32"),
//     "title" : "Lorem ipsum dolor sit amet consectetur adipiscing elit",
//     "text" : "Nam pharetra tempor dui, sed posuere augue elementum sit ameti, eu fringilla orci feugiat eleifend",
//     "description" : "Nam pharetra tempor dui, sed posuere augue elementum sit ameti, eu fringilla orci feugiat eleifend",
//     "imgUrl" : "https://epam-education.herokuapp.com/img/news/news1.jpg"
// }

// /* 2 */
// {
//     "_id" : ObjectId("5957614a572c85530d1c3a33"),
//     "title" : "Ligula gravida, hendrerit imperdiet libe",
//     "text" : "Phasellus eget pharetra quam. Ut semper arcu eget nisl elementum commodo. Proin interdum turpis quis mauris tristique, et tincidunt urna facilisis",
//     "description" : "Phasellus eget pharetra quam. Ut semper arcu eget nisl elementum commodo. Proin interdum turpis quis mauris tristique",
//     "imgUrl" : "https://epam-education.herokuapp.com/img/news/news2.jpg"
// }

// /* 3 */
// {
//     "_id" : ObjectId("59576193572c85530d1c3a34"),
//     "title" : "Curabitur pretium ac eros in rhoncus",
//     "text" : "Donec consectetur felis et ex dignissim, non cursus lectus molestie. Ut consectetur eros at quam rutrum tempor. Aliquam placerat cursus lobortis",
//     "description" : "Donec consectetur felis et ex dignissim, non cursus lectus molestie. Ut consectetur eros at quam rutrum tempor.",
//     "imgUrl" : "https://epam-education.herokuapp.com/img/news/news3.jpg"
// }

// /* 4 */
// {
//     "_id" : ObjectId("595761c8572c85530d1c3a35"),
//     "title" : "Ut interdum, libero eu ultricies fermentum",
//     "text" : "Quisque vulputate ornare gravida. Praesent vel viverra tellus. Pellentesque arcu felis, vulputate ut enim at, condimentum accumsan augue",
//     "description" : "Quisque vulputate ornare gravida. Praesent vel viverra tellus. Pellentesque arcu felis, vulputate ut enim at",
//     "imgUrl" : "https://epam-education.herokuapp.com/img/news/news4.jpg"
// }

// /* 5 */
// {
//     "_id" : ObjectId("5957628b572c85530d1c3a36"),
//     "title" : "Nullam semper lectus ligula, a euismod veli",
//     "text" : "At blandit ipsum. Fusce malesuada, lectus at consequat feugiat, lectus lacus vulputate ligula, id malesuada nisi leo nec risu malesuada eu. Maecenas eget ante massa.",
//     "description" : "At blandit ipsum. Fusce malesuada, lectus at consequat feugiat, lectus lacus vulputate ligula, id malesuada nisi leo nec risu",
//     "imgUrl" : "https://epam-education.herokuapp.com/img/news/news5.jpg"
// }

// /* 6 */
// {
//     "_id" : ObjectId("595762e0572c85530d1c3a37"),
//     "title" : " Ullamcorper arcu sit amet, varius interdum",
//     "text" : "Lacus, semper nec odio sit amet, dapibus semper ex. Proin molestie, arcu nec pulvinar suscipit, dui tortor pulvinar enim, vel laoreet libero felis nec nibh. Vestibulum metus dolor, convallis nec facilisis at, vestibulum eget justo. Etiam hendrerit fringilla lobortis. Nullam semper lectus ligula",
//     "description" : "Arcu nec pulvinar suscipit, dui tortor pulvinar enim, vel laoreet libero felis nec nibh. Vestibulum metus dolor, convallis",
//     "imgUrl" : "https://epam-education.herokuapp.com/img/news/news6.jpg"
// }