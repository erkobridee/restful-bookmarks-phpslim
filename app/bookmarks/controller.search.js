angular.module('app').controller(

  // controller name
  'BookmarksSearchCtrl',

  // dependencies injection
  ['$scope', 'BookmarksSearchResource',

// controller definition
function ($scope, resource) {

  $scope.showFilter = false;

  $scope.doSearch = function() {
    resource.query(
      {name: $scope.searchName},
      function(res) {
        console.log(res);
        $scope.bookmarks = res;  
      }
    );
  };

}]);