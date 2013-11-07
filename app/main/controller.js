angular.module('app').controller(

  // controller name
  'MainCtrl', 

  // dependencies injection
  ['ProgressConfig', 'MenuConfig', 

// controller definition
function(progressConfig, menu) {  

  //--- @begin: loading progressbar config
  progressConfig.eventListeners();
  progressConfig.color('#428bca');
  //--- @end: loading progressbar config  

  //--- @begin: menu items 
  menu.addMenuItem('Boorkmars', 'bookmarks');
  menu.addMenuItem('About', 'about');  
  //--- @end: menu items 

}]);