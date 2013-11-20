require({

  // libraries dependencies with fallback
  paths: {

    jquery: [
      'vendor/jquery/1.10.2/jquery.min'
    ],

    bootstrap: [
      'vendor/bootstrap/3.0.2/js/bootstrap.min'
    ],

    angular: [
      'vendor/angular.js/1.2.1/angular.min'
    ],

    angular_route: [
      'vendor/angular.js/1.2.1/angular-route.min'
    ],

    angular_resource: [
      'vendor/angular.js/1.2.1/angular-resource.min'
    ],

    ngProgress: [
      'vendor/ngProgress/1.0.3/ngProgress.min'
    ]

  },

  // define js scripts dependencies
  shim: {

    'bootstrap': {
      deps: ['jquery']
    },

    'angular': {
      deps: ['bootstrap']
    },

    'angular_route': {
      deps: ['angular']
    },

    'angular_resource': {
      deps: ['angular']
    },

    'ngProgress': {
      deps: ['angular']
    }

  }

},

['require'], function(require) {

  console.log('project require.js config');

  require([
    'shared/components/progressbar/loading/require.config',
    'app/require.config'
  ]);

});