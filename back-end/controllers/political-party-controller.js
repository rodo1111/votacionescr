/**
 * Controller class for Political Party objects.
 */

/**
 * Required modules.
 */
var PoliticalParty = require('../models/political-party');

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
				cadidateName : 				politicalPartyObj.cadidateName,
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
	}
}

/**
 * Class export.
 */
module.exports = PoliticalPartyController;