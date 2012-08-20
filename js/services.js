angular.module('BookmarkService', ['ngResource'])

  .factory('BookmarkResource', function($resource) {
    
    var api = $resource(
      'api/bookmarks/:param1/:param2',
      {
        'param1': ''
      , 'param2': ''
      }, {
        'update': { 'method': 'PUT' }
      }
    );

    return api;
  	  
  });

// http://docs.angularjs.org/api/ngResource.$resource