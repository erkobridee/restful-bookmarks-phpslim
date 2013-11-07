angular.module('app').controller(

  // controller name
  'BookmarksEditCtrl',

  // dependencies injection
  ['$scope', 'BookmarksResource', '$routeParams', '$window', '$location', 

// controller definition
function ($scope, resource, $routeParams, $window, $location) {

  $scope.title = 'Edit Bookmark : ' + $routeParams.id;

  resource.get({id: $routeParams.id}, function(result) {
    $scope.bookmark = result;
  });

  $scope.save = function() {
    $scope.bookmark.$update({id: $routeParams.id}, function(res) {
      $location.path('/');
    });
  };
  
  $scope.showConfirm = false;
  
  $scope.delete = function() {
    $scope.showConfirm = true;
  };

  $scope.cancelDelete = function() {
    $scope.showConfirm = false;
  };

  $scope.destroy = function() {
    $scope.bookmark.$delete({id: $routeParams.id}, function(res) {
      $scope.showConfirm = false;
      $location.path('/');
    });
  };

}]);