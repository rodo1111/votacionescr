/**
 * Model class for District entity object.
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
var districtSchema = new Schema({
	electoralCode: 		String,
	province:			String,
	canton:				String,
	district:			String
});

/**
 * Class export.
 */
module.exports = mongoose.model('District', districtSchema);