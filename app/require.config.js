require({

  // define js scripts dependencies
  shim: {

    //--- 

    'app/main/module': {
      deps: [
        'angular_route', 
        'angular_resource',
        'shared/components/progressbar/loading/module'
      ]
    },

    //--- @begin app files

    'app/main/factory.menu.config': {
      deps: ['app/main/module']
    },

    'app/main/controller': {
      deps: ['app/main/factory.menu.config']
    },

      //--- @begin: bookmarks
      'app/bookmarks/resource': {
        deps: ['app/main/module']
      },
      'app/bookmarks/resource.search': {
        deps: ['app/main/module']
      },
      'app/bookmarks/controller.list': {
        deps: ['app/bookmarks/resource']
      },
      'app/bookmarks/controller.new': {
        deps: ['app/bookmarks/resource']
      },
      'app/bookmarks/controller.edit': {
        deps: ['app/bookmarks/resource']
      },
      'app/bookmarks/controller.search': {
        deps: ['app/bookmarks/resource.search']
      },
      //--- @edit: bookmarks


    //--- @end app files

    'app/main/routes': {
      deps: [ // TODO: review and add app controllers ref's
        'app/bookmarks/controller.list',
        'app/bookmarks/controller.new',
        'app/bookmarks/controller.edit',
        'app/bookmarks/controller.search'
      ]
    },

    'app/main/start': {
      deps: [ // TODO: review and add app routes and view componentes ref's
        'app/main/controller',
        'app/main/routes'     
      ]
    }

  }

},

['require'], function(require) {

  console.log('app require.js config');

  require(['app/main/start']);

});