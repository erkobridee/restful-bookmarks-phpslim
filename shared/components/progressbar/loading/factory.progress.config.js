angular.module('fend.comp.progressbar.loading').factory(

  // resource name
  'ProgressConfig',

// dependencies injection
['$rootScope', 'ngProgress',

// factory definition
function($rootScope, ngProgress) {

  return {
    eventListeners: function() {
      $rootScope.$on('loadingbar:start', function(event) {
        ngProgress.start();
      });

      $rootScope.$on('loadingbar:progress', function(event, value) {
        ngProgress.set(value);
      });

      $rootScope.$on('loadingbar:complete', function(event) {
        ngProgress.complete();
        ngProgress.stop();
      });      
    },

    color: function(new_color) {
      ngProgress.color(new_color);
    }
  };

}]);