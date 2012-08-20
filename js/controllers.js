Ctrl = (function() {
  "use strict";

  function Ctrl() {}

  Ctrl.prototype.List = function($scope, BookmarkResource) {
    $scope.bookmarks = BookmarkResource.query();
  }

  Ctrl.prototype.New = function($scope, $location, BookmarkResource) {
	  $scope.bookmark = new BookmarkResource({
	  	"id":0, "name":'', 
	  	"description":'', "url":''
	  });
	  
	  $scope.save = function() {
	  	console.log('save button');
	  	
	  	$scope.bookmark.$save(function(res) {
	  		$location.path('/');
	  	});
	  }
  }
  
  Ctrl.prototype.Edit = function(
  	$scope, $routeParams, $window, 
  	$location, BookmarkResource
  ) {
  	BookmarkResource.get({param1: $routeParams.id}, function(res) {
  		$scope.bookmark = res;
  		
  		console.log($scope.bookmark);
  	});
  	
    $scope.save = function() {
    	$scope.bookmark.$update({param1: $routeParams.id}, function(res) {
    			$location.path('/');
    	});
    }
    
    $scope.destroy = function() {
    	var confirm = $window.confirm('Delete '+$scope.bookmark.name+ ' bookmark?');
    	if(confirm) {
    		$scope.bookmark.$delete({param1: $routeParams.id}, function(res) {
    			$location.path('/');
    		});
    	}
    }
  }

  return Ctrl;
})();

var ctrl = new Ctrl();