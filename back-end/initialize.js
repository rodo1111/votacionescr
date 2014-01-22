var mongoose = require('mongoose');

// Open the connection to MongoDB
mongoose.connect('mongodb://localhost/votacionescr', function(err, res) {
	if (err) {
		console.log('Error connecting to MongoDB');
	} else {
		console.log('Successfully connected to MongoDB');
	}
});

// Load the padron file into the database
var personController = require('./controllers/person-controller');
personController.loadFromFile('./padron/PADRON_COMPLETO.txt')