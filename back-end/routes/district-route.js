/**
 * Router definition for District entities.
 */

/**
 * Required modules.
 */
var DistrictController = require('../controllers/district-controller');

/**
 * POST new district.
 */
exports.new = function(req, res) {
	DistrictController.saveDistrict(req.body, function(message) {
		res.send(message);
	});
};