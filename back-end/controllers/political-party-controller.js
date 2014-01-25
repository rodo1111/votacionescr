/**
 * Controller class for Political Party objects.
 */

/**
 * Required modules.
 */
var PoliticalParty = require('../models/political-party'),
	fs = require('fs');;

var PoliticalPartyController = {
	/**
	 * Method to list the saved Political Parties.
	 */
	listPoliticalParties : function(callback) {
		var politicalPartiesQuery = PoliticalParty.find();
		
		// Executes the query
		politicalPartiesQuery.exec(function(err, politicalParties) {
			// Check the result of the operation
			if (!err) {
				if (politicalParties.length > 0) {
					callback(politicalParties);
				} else {
					callback('There are no political parties');
				}			
			} else {
				callback(error);
			}
		});
	},
	
	/**
	 * Method to save a given political party object request.
	 * 
	 * @param politicalParty Object to save
	 */
	savePoliticalParty : function(politicalPartyObj, callback) {
		// Build the political party object based on the given parameters
		var newPoliticalParty = new PoliticalParty(
			{ 
				name : 						politicalPartyObj.name,
				candidateName : 			politicalPartyObj.candidateName,
				candidatePhotoUrl : 		politicalPartyObj.candidatePhotoUrl,
				politicalPartyPhotoUrl : 	politicalPartyObj.politicalPartyPhotoUrl
			}
		);
		
		// Save the entity to MongoDB
		newPoliticalParty.save(function(error) {
			// Check if the operation was successfully executed
			if (error) {
				callback(error);
			} else {
				callback('Political Party successfully saved');
			}
		});
	},
	
	/**
	 * Method to load the political parties from the given path.
	 * 
	 * @param path String with the path of the JSON file
	 */
	loadFromFile : function(path) {
		fs.readFile(path, 'utf8', function (err, data) {
			if (err) {
				console.log('Error: ' + err);
				return;
			}

			var politicalParties = JSON.parse(data);

			// Create each political party object
			for (var indexPoliticalParty = 0; indexPoliticalParty < politicalParties.length; indexPoliticalParty++) {
				PoliticalPartyController.savePoliticalParty(politicalParties[indexPoliticalParty], function(message) {
					console.log(message);
				});
			}
		});
	}
}

/**
 * Class export.
 */
module.exports = PoliticalPartyController;