/**
 * Model class for Political Party entity object.
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
var politicalParySchema = new Schema({
	name:					String,
	candidateName:			String,
	candidatePhotoUrl:		String,
	politicalPartyPhotoUrl:	String,
	type: 					Number
});

/**
 * Class export.
 */
module.exports = mongoose.model('PoliticalParty', politicalParySchema, 'politicalParties');