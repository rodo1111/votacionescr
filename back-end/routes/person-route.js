/**
 * Router definition for People (person) entities.
 */

/**
 * Required modules.
 */
var PersonController = require('../controllers/person-controller');

/**
 * POST new person.
 */
exports.new = function(req, res) {
	PersonController.savePerson(req.body, function(message) {
		res.send(message);
	});
};

/**
 * GET the given person by its ndi.
 */
exports.get = function(req, res) {
	PersonController.getPerson(req.params.ndi, function(message) {
		res.send(message);
	});
};