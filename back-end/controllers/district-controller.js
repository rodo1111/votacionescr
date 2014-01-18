/**
 * Controller class for District objects.
 */

/**
 * Required modules.
 */
var District = require('../models/district');

var DistrictController = {
	/**
	 * Method to save a given district object request.
	 * 
	 * @param district Object to save
	 */
	saveDistrict : function(districtObj, callback) {
		// Build the district object based on the given parameters
		var newDistrict = new District(
			{ 
				electoralCode : 	districtObj.electoralCode,
				province : 			districtObj.province,
				canton : 			districtObj.canton,
				district : 			districtObj.district
			}
		);
		
		// Save the entity to MongoDB
		newDistrict.save(function(error) {
			// Check if the operation was successfully executed
			if (error) {
				callback(error);
			} else {
				callback('District successfully saved');
			}
		});
	}
}

/**
 * Class export.
 */
module.exports = DistrictController;