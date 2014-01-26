var politicalPartyServices = angular.module('politicalPartyServices', ['ngResource']);
var voterServices = angular.module('voterServices', ['ngResource']);

politicalPartyServices.factory('PoliticalParty', ['$resource',
  function($resource){
    return $resource('political-parties', {}, {
      query: {method:'GET', params:{}, isArray:true}
    });
 }]);
 
voterServices.factory('Voter', ['$resource',
  function($resource){
    return $resource('voter', {}, {
      create: {method:'POST'}
    });
 }]);