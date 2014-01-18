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
	id: 					ObjectId,
	name:					String,
	cadidateName:			String,
	candidatePhotoUrl:		String,
	politicalPartyPhotoUrl:	String
});

/**
 * Class export.
 */
module.exports = mongoose.model('PoliticalPary', politicalParySchema);