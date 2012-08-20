angular.module('BookmarksApp', ['BookmarkService'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {controller: ctrl.List, templateUrl:'tpl/list.html'})
      
      .when('/new', {controller: ctrl.New, templateUrl:'tpl/edit.html'})
      .when('/edit/:id', {controller: ctrl.Edit, templateUrl:'tpl/edit.html'})
      
      .otherwise({redirectTo:'/'});
  });