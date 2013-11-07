angular.module('app').controller(

  // controller name
  'MainCtrl', 

  // dependencies injection
  ['ProgressConfig', '$scope',

// controller definition
function(progressConfig, $scope) {

  //--- @begin: loading progressbar config
  progressConfig.eventListeners();
  progressConfig.color('#428bca');
  //--- @end: loading progressbar config  


  //--- @begin: menu items
  function menuItem(label, url, css) {
    return {
      label: label,
      url: '#'+url,
      css: (css || '') // 'active'
    };
  }

  var menuItemBookmark = menuItem('Boorkmars', 'bookmarks', 'active');

  $scope.menu = {
    self: this,

    selected: menuItemBookmark,
    
    items: [
      menuItemBookmark,
      menuItem('About', 'about')
    ],

    menuItemClick: function(value) {
      if(value !== $scope.menu.selected) {
        $scope.menu.selected.css = '';
        value.css = 'active';
        $scope.menu.selected = value;
      }
    }
  };
  //--- @begin: menu items

}]);