/**
 * Model class for Vote entity object.
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
var voteSchema = new Schema({
	id: 					ObjectId,
	date:					Date,
	idPoliticalParty:		String,
	idVoter:				String,
	voteType:				Number	
});

/**
 * Class export.
 */
module.exports = mongoose.model('Vote', voteSchema);