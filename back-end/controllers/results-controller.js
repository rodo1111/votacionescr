/**
 * Controller class for Results queries.
 */

/**
 * Required modules.
 */
var Voter = require('../models/voter');

var ResultsController = {
	/**
	 * Method to get the general results of the elections of a given type.
	 * @param voteType String with the type of the elections to retrieve
	 */
	getGeneralResults : function(voteType, callback) {
		var resultsQuery = Voter.aggregate(
				{
					$unwind: "$votes"
				}, 
				{
					$match : { "votes.voteType" : parseInt(voteType) }
				}, 
				{
					$project : { "votes.idPoliticalParty" : 1 }
				}, 
				{	
					$group : { _id : "$votes.idPoliticalParty", count : { $sum : 1 } }
				}
		);
		
		// Executes the query
		resultsQuery.exec(function(err, results) {
			// Check the result of the operation
			if (!err) {
				callback(results);
			} else {
				callback(err);
			}
		});
	}
}

/**
 * Class export.
 */
module.exports = ResultsController;