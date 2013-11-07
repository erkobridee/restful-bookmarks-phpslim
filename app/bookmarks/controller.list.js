angular.module('app').controller(

  // controller name
  'BookmarksListCtrl',

  // dependencies injection
  ['$scope', 'BookmarksResource',

// controller definition
function ($scope, resource) {

  $scope.showFilter = false;

  $scope.bookmarks = resource.query();

}]);