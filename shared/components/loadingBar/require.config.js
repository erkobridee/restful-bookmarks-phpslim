require({

  // define js scripts dependencies
  shim: {

    'shared/components/loadingBar/module': {
      deps: ['angular', 'ngProgress']
    },

    'shared/components/loadingBar/progressConfig': {
      deps: ['shared/components/loadingBar/module']
    },

    'shared/components/loadingBar/progressStatus': {
      deps: ['shared/components/loadingBar/module']
    },

    'shared/components/loadingBar/interceptor': {
      deps: ['shared/components/loadingBar/progressStatus']
    },

    'shared/components/loadingBar/start': {
      deps: [
        'shared/components/loadingBar/progressConfig',
        'shared/components/loadingBar/interceptor'
      ]
    }

  }

},

['require'], function(require) {

  console.log('shared/components/loadingBar require.js config');

  require(['shared/components/loadingBar/start']);

});