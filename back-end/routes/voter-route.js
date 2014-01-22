/**
 * Router definition for Voter entities.
 */

/**
 * Required modules.
 */
var VoterController = require('../controllers/voter-controller');

/**
 * POST new voter.
 */
exports.new = function(req, res) {
	VoterController.saveVoter(req.body, function(message) {
		res.send(message);
	});
};