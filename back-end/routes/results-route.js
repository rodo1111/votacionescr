/**
 * Router definition for Results queries.
 */

/**
 * Required modules.
 */
var ResultsController = require('../controllers/results-controller');

/**
 * POST new voter.
 */
exports.generalResults = function(req, res) {
	ResultsController.getGeneralResults(req.params.voteType, function(message) {
		res.send(message);
	});
};