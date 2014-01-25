var votacionescrApp = angular.module('votacionescrApp', [
	'ngRoute',
	'votacionescrControllers',
	'politicalPartyServices']);

votacionescrApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/mivoto', {
        templateUrl: 'partials/mivoto.html',
        controller: 'VoterCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        templateUrl: 'partials/votos.html',
        redirectTo: ''
      });
  }]);