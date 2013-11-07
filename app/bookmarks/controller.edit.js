angular.module('app').controller(

  // controller name
  'BookmarksEditCtrl',

  // dependencies injection
  ['$scope', 'BookmarksResource', '$routeParams', '$window', '$location', 

// controller definition
function ($scope, resource, $routeParams, $window, $location) {

  $scope.title = 'Edit Bookmark : ' + $routeParams.id;

  resource.get({id: $routeParams.id}, function(res) {
    $scope.bookmark = res;
  });

  $scope.save = function() {
    $scope.bookmark.$update({id: $routeParams.id}, function(res) {
      $location.path('/');
    });
  };
    
  $scope.destroy = function() {
    // TODO: review
    var confirm = $window.confirm('Delete '+$scope.bookmark.name+ ' bookmark?');
    if(confirm) {
      console.log(self.id);
      $scope.bookmark.$delete({id: $routeParams.id}, function(res) {
        $location.path('/');
      });
    }
  };

}]);