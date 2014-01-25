var votacionescrControllers = angular.module('votacionescrControllers', []);

votacionescrControllers.controller('VoterCtrl', ['$scope', 'PoliticalParty', function ($scope, PoliticalParty) {
  $scope.cantidates = [];
  $scope.politicalParties = [];



  var loadCandidates = function(){
  	$scope.politicalParties = PoliticalParty.query();
  	console.log('load')
  }

  loadCandidates();
}]);
