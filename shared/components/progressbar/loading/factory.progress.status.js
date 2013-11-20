angular.module('fend.comp.progressbar.loading').factory(

  // resource name
  'ProgressStatus',

['$rootScope',

function($rootScope) {

  return {
    start: function() {
      $rootScope.$emit('loadingbar:start');
    },

    progress: function(value) {
      $rootScope.$emit('loadingbar:progress', value*100);
    },

    complete: function() {
      $rootScope.$emit('loadingbar:complete');
    }
  };

}]);