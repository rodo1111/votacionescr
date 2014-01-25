var mongoose = require('mongoose');

// Open the connection to MongoDB
mongoose.connect('mongodb://localhost/votacionescr', function(err, res) {
	if (err) {
		console.log('Error connecting to MongoDB');
	} else {
		console.log('Successfully connected to MongoDB');
	}
});

var personController = require('./controllers/person-controller');
var voterController = require('./controllers/voter-controller');
var politicalPartyController = require('./controllers/political-party-controller');

// Load the padron file into the database
//personController.loadFromFile('./padron/PADRON_COMPLETO.txt')

// Generate a list of random voters
voterController.generateRandomVoters('5000', function(message) {
	console.log(message);
});

// Load the list of political parties into the database
politicalPartyController.loadFromFile('./resources/political-parties.json');
