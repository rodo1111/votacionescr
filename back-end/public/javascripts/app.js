var votacionescrApp = angular.module('votacionescrApp', [
	'ngRoute',
	'votacionescrControllers',
	'politicalPartyServices',
	'voterServices',
	'ui.bootstrap']);

votacionescrApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/mivoto', {
        templateUrl: 'partials/vote.html',
        controller: 'VoterCtrl'
      }).
      when('/dondevotar', {
        templateUrl: 'partials/vote-place.html',
      }).
      otherwise({
        templateUrl: 'partials/results.html',
        redirectTo: ''
      });
  }]);