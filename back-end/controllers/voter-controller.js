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
	},
	
	/**
	 * Method to generate a number of random voters.
	 * 
	 * @param numVoters Integer with the number of voters to create.
	 */
	generateRandomVoters : function(numVoters, callback) {
		var politicalParties = [];
		var numberVotes = 1;
		var actualVotes = [];
		
		// Generate the political parties
		for (var indexPoliticalParty = 0; indexPoliticalParty < 10; indexPoliticalParty++) {
			politicalParties.push('' + indexPoliticalParty + indexPoliticalParty + indexPoliticalParty);
		}
		
		// Generate the Voters objects
		for (var indexVoter = 0; indexVoter < numVoters; indexVoter++) {
			numberVotes = Math.floor((Math.random() * 2) + 1),
			actualVotes = [];
			
			// Generate each vote
			for (var indexActualVote = 0; indexActualVote < numberVotes; indexActualVote++) {
				actualVotes.push({
					idPoliticalParty : politicalParties[Math.floor(Math.random() * politicalParties.length)],
					voteType : indexActualVote + 1
				});
			}
			
			var newVoter = new Voter(
				{
					age: Math.floor((Math.random() * 77) + 18),
					gender : Math.floor((Math.random() * 2)),
					voteTable : Math.floor((Math.random() * 400) + 1) + '',
					location : '',
					votes : actualVotes
				}
			);
			
			// Save the voter
			newVoter.save(function(error) {
				if (error) {
					console.log('Error saving the voter')
				}
			});
		}
		
		callback('Voters successfully created');
	}
}

/**
 * Class export.
 */
module.exports = VoterController;