var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

var mongoose = require('mongoose');
mongoose.connect('mongodb://heroku_6q05xjb0:aeamao92plaq974hja2nbhdhs5@ds145292.mlab.com:45292/heroku_6q05xjb0');

mongoose.connection.on('open', function() {
	console.log('Mongoose connected.');
});

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(request, response) {
	response.render('pages/index');
});

app.use(function(req, res, next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "POST, GET, DELETE, PUT");
	res.header("Access-Control-Max-Age", "3600");
	res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
	next();
});

app.get('/news', function(req, res) {
	res.header("Access-Control-Allow-Origin", "*");

	res.json({status: 'success'});
});

app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});


