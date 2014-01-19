/**
 * Router definition for Political Party entities.
 */

/**
 * Required modules.
 */
var PoliticalPartyController = require('../controllers/political-party-controller');

/**
 * GET list of Political Parties.
 */
exports.list = function(req, res) {
	PoliticalPartyController.listPoliticalParties(function(message) {
		res.send(message);
	});
};

/**
 * POST a new Political Party.
 */
exports.new = function(req, res) {
	PoliticalPartyController.savePoliticalParty(req.body, function(message) {
		res.send(message);
	});
};