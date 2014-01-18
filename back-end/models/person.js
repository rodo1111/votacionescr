/**
 * Model class for Person entity object.
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
var personSchema = new Schema({
	ndi:				String,
	electoralCode: 		String,
	gender:				Number,
	voteCenter:			String,
	name:				String,
	firstSurname:		String,
	secondSurname:		String,
	birthday:			Date
});

/**
 * Class export.
 */
module.exports = mongoose.model('Person', personSchema);