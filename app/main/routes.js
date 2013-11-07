angular.module('app').config(

  // dependencies injection
  ['$routeProvider',

// routes definition
function ($routeProvider) {

  $routeProvider

    //--- @begin: bookmarks
    .when(
      '/bookmarks',
      {
        controller: 'BookmarksListCtrl',
        templateUrl: 'app/bookmarks/tpl.list.html'
      }
    )
    .when(
      '/bookmarks/search',
      {
        controller: 'BookmarksSearchCtrl',
        templateUrl: 'app/bookmarks/tpl.search.html'
      }
    )
    .when(
      '/bookmarks/new',
      {
        controller: 'BookmarksNewCtrl',
        templateUrl: 'app/bookmarks/tpl.edit.html'
      }
    )
    .when(
      '/bookmarks/edit/:id',
      {
        controller: 'BookmarksEditCtrl',
        templateUrl: 'app/bookmarks/tpl.edit.html'
      }
    )
    //--- @end: bookmarks

    .when(
      '/about',
      {
        templateUrl: 'app/about/tpl.html'
      }
    )

    .otherwise({redirectTo:'/bookmarks'});

}]);