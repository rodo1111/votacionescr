/**
 * Controller class for People (person) objects.
 */

/**
 * Required modules.
 */
var Person = require('../models/person');

var PersonController = {
	/**
	 * Method to save a given person object request.
	 * 
	 * @param person Object to save
	 */
	savePerson : function(personObj, callback) {
		// Build the person object based on the given parameters
		var newPerson = new Person(
			{ 
				ndi : 				personObj.ndi,
				electoralCode : 	personObj.electoralCode,
				gender : 			personObj.gender,
				voteCenter : 		personObj.voteCenter,
				name : 				personObj.name,
				firstSurname : 		personObj.firstSurname,
				secondSurname : 	personObj.secondSurname,
				birthday : 			personObj.birthday
			}
		);
		
		// Save the entity to MongoDB
		newPerson.save(function(error) {
			// Check if the operation was successfully executed
			if (error) {
				callback(error);
			} else {
				callback('Person successfully saved');
			}
		});
	},
	
	/**
	 * Method to get a person from the ndi.
	 * 
	 * @param ndi String with the id to find
	 */
	getPerson : function(ndi, callback) {
		var personQuery = Person.find({ ndi: ndi });
		
		// Executes the query
		personQuery.exec(function(err, person) {
			// Check the result of the operation
			if (!err) {
				callback(person);
			} else {
				callback(error);
			}
		});
	}
}

/**
 * Class export.
 */
module.exports = PersonController;