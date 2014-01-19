
/**
 * Module dependencies.
 */
var routesPath = './routes/';

var express = require('express');
var routes = require('./routes');
var person = require(routesPath + 'person-route');
var politicalParty = require(routesPath + 'political-party-route');
var district = require(routesPath + 'district-route');
var voter = require(routesPath + 'voter-route');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);

// Person endpoints
app.post('/person/new', person.new);
app.get('/person/:ndi', person.get);

// Political Party endpoints
app.get('/political-parties', politicalParty.list);
app.post('/political-party/new', politicalParty.new);

// District endpoints
app.post('/district/new', district.new);

// Voter endpoints
app.post('/voter/new', voter.new);

// Open the connection to MongoDB
mongoose.connect('mongodb://localhost/votacionescr', function(err, res) {
	if (err) {
		console.log('Error connecting to MongoDB');
	} else {
		console.log('Successfully connected to MongoDB');
	}
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
