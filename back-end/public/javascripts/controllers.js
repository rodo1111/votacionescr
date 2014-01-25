var votacionescrControllers = angular.module('votacionescrControllers', []);

votacionescrControllers.controller('VoterCtrl', ['$scope', 'PoliticalParty', function ($scope, PoliticalParty) {
  $scope.cantidates = [];
  $scope.politicalParties = [];
  $scope.actualSelectedCandidate = {};
  
  /**
   * Method to load the candidates from the database.
   */
  var loadCandidates = function(){
  	$scope.politicalParties = PoliticalParty.query();
  }

  /**
   * Method to select a political party for vote
   * @param partyId String with the value of the selected candidate
   */
  $scope.selectPartyForVote = function(partyId) {
	  angular.forEach($scope.politicalParties, function(candidate, key) {
		  // Check if the actual value is the partyId
		  if (candidate._id === partyId) {
			  $scope.actualSelectedCandidate = candidate;
		  }
	  });
  }
  
  loadCandidates();
}]);
