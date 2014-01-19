/**
 * Model class for Voter entity object.
 */

/**
 * Required modules.
 */
var mongoose = require('mongoose');

/**
 * Class variables.
 */
var Schema = mongoose.Schema;

/**
 * Schema definition
 */
var voterSchema = new Schema({
	age:					Number,
	gender:					Number,	
	voteTable:				String,
	date:					{ type: Date, default: Date.now },
	location:				String,
	votes: 
		[
			{
				idPoliticalParty:		String,
				voteType:				Number
			}
		]
});

/**
 * Class export.
 */
module.exports = mongoose.model('Voter', voterSchema);