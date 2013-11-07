require({

  // libraries dependencies with fallback
  paths: {

    jquery: [
      'vendor/js/jquery-1.10.2.min'
    ],

    bootstrap: [
      'vendor/bootstrap/js/bootstrap-3.0.1.min'
    ],

    angular: [
      'vendor/angular/angular-1.1.5.min'
    ],

    angular_resource: [
      'vendor/angular/angular-resource-1.1.5.min'
    ],

    ngProgress: [
      'vendor/angular/ngProgress.min'
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
    'shared/components/loadingBar/require.config',
    'app/require.config'
  ]);

});