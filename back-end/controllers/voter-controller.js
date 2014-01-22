/**
 * Controller class for Voter objects.
 */

/**
 * Required modules.
 */
var Voter = require('../models/voter');

var VoterController = {
	/**
	 * Method to save a given voter object request.
	 * 
	 * @param district Object to save
	 */
	saveVoter : function(voterObj, callback) {		
		// Build the voter object based on the given parameters
		var newVoter = new Voter(
			{ 
				age : 		voterObj.age,
				gender : 	voterObj.gender,
				voteTable : voterObj.voteTable,
				location:	voterObj.location,
				votes:		voterObj.votes
			}
		);
		
		// Save the entity to MongoDB
		newVoter.save(function(error) {
			// Check if the operation was successfully executed
			if (error) {
				callback(error);
			} else {
				callback('Voter saved successfully');
			}
		});
	}
}

/**
 * Class export.
 */
module.exports = VoterController;