var votacionescrControllers = angular.module('votacionescrControllers', []);

votacionescrControllers.controller('VoterCtrl', ['$scope', '$http', 'PoliticalParty', 'Voter',
                                                 function ($scope, $http, PoliticalParty, Voter) {
  $scope.cantidates = [];
  $scope.politicalParties = [];
  $scope.actualSelectedCandidate = {};
  $scope.selectedCandidates = [];
  $scope.voteSuccessfullyEmitted = false;
  
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
	  $scope.voteSuccessfullyEmitted = false;
	  $scope.actualSelectedCandidate = {};
	  
	  angular.forEach($scope.politicalParties, function(candidate, key) {
		  // Check if the actual value is the partyId
		  if (candidate._id === partyId) {
			  $scope.actualSelectedCandidate = candidate;
		  }
	  });
  }
  
  /**
   * Method to vote for the selected candidate
   */
  $scope.voteForParty = function() {
	  // Add the selected candidate
	  $scope.selectedCandidates.push($scope.actualSelectedCandidate);
	  
	  var voter = { 
			  age : 24,
			  gender : 	1,
			  voteTable : '1234',
			  location : '',
			  votes : []
	  }
	  
	  // Add each vote
	  angular.forEach($scope.selectedCandidates, function(candidate, key) {
		  voter.votes.push({
			  idPoliticalParty : candidate._id,
			  voteType : candidate.type
		  });
	  });
	  
	  // Emit the vote to backend
//		  Voter.create(voter);
	  
	  // Clear the selected candidates
	  $scope.selectedCandidates = [];
	  $scope.voteSuccessfullyEmitted = true;
  }
  
  loadCandidates();
}]);
