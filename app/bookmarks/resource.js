angular.module('app').factory(

  // resource name
  'BookmarksResource', 

  // dependency injection
  ['$resource', 

function($resource) {

  // http://code.angularjs.org/1.1.5/docs/api/ngResource.$resource
  var rest = $resource(
    'rest/bookmarks/:id',
    {
      'id': ''
    }, 
    {
      'update': { 'method': 'PUT' }
    }
  );

  return rest;

}]);