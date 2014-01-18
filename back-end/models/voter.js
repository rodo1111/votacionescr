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
	date:					Date,
	gender:					Number,
	voteTable:				String,
	location:				String
});

/**
 * Class export.
 */
module.exports = mongoose.model('Voter', voterSchema);