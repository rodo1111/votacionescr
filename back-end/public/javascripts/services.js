var politicalPartyServices = angular.module('politicalPartyServices', ['ngResource']);
 
politicalPartyServices.factory('PoliticalParty', ['$resource',
  function($resource){
    return $resource('political-parties', {}, {
      query: {method:'GET', params:{}, isArray:true}
    });
 }]);