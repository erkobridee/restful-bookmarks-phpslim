angular.module('app').controller(

  // controller name
  'MainCtrl', 

  // dependencies injection
  ['ProgressConfig', '$scope', '$location',

// controller definition
function(progressConfig, $scope, $location) {

  //--- @begin: loading progressbar config
  progressConfig.eventListeners();
  progressConfig.color('#428bca');
  //--- @end: loading progressbar config  


  //--- @begin: menu items
  function menuItem(label, location, css) {
    return {
      label: label,
      location: '/'+location,
      url: '#'+location,
      css: (css || '') // 'active'
    };
  }

  $scope.locationsMap = {
    '/bookmarks': menuItem('Boorkmars', 'bookmarks'),
    '/about': menuItem('About', 'about')
  },

  $scope.menuItems = [
    $scope.locationsMap['/bookmarks'],
    $scope.locationsMap['/about']
  ];

  $scope.menuItemSelected = null;

  $scope.menuItemClick = function(itemClick) {
    if(itemClick !== $scope.menuItemSelected) {
        if($scope.menuItemSelected !== null) $scope.menuItemSelected.css = '';
        itemClick.css = 'active';
        $scope.menuItemSelected = itemClick;
      }
  };


  $scope.location = $location;
  $scope.$watch("location.path()", checkLocation, true);

  function checkLocation() {
    var path, splitArr, location; 

    path = $location.path(); 
    splitArr = path.split('/');
    if(splitArr.length > 2) {
      path = '/'+splitArr[1];
    }  
    location = $scope.locationsMap[path];
    if(location) {
      $scope.menuItemClick(location);
    }

  }  

  //--- @begin: menu items

}]);