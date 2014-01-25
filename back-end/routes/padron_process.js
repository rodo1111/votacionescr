
/*
 * padron_process.js Process the list provieded by the TSE
 */

var lazy = require("lazy"),
	fs = require('fs'),
	personController = require('../controllers/person-controller');

exports.process = function(req, res){
  res.send("respond with a resource");

  loadPadron('padron/PADRON_COMPLETO.txt');
  loadDistelect('padron/Distelec.txt');
};

/**
 * Loads the data from the file wiht the @param name
 */
function loadPadron(name){

	var rs = fs.createReadStream(name);

	 new lazy(rs).lines.forEach(function(line){
	         var data = line.toString().split(",");
	         var json = { 
	         	  ndi : data[0]
	         	, electoralCode : data[1]
	         	, gender : data[2]
	         	, voteCenter : data[4]
	         	, name : data[5].trim()
	         	, firstSurname : data[6].trim()
	         	, secondSurname : data[7].trim()
	         	, birthday : null
	         } ;
	         personController.savePerson(json, function(message) {
				console.log(JSON.stringify(message));
			 });
	         console.log(JSON.stringify(json));
	     }
	 );
}

/**
 * Loads the data from the file wiht the @param name
 */
function loadDistelect(name){

	var rs = fs.createReadStream(name);

	 new lazy(rs).lines.forEach(function(line){
	         var data = line.toString().split(",");
	         var json = { 
	         	  electoralCode : data[0]
	         	, province : data[1]
	         	, canton : data[2]
	         	, district : data[3]
	         } ;
	         console.log(JSON.stringify(json));
	     }
	 );

}