/*
  AngularJS Mocks Backend v0.1.3
  (c) 2013 Erko Bridee - https://github.com/erkobridee/angular-mocks-backend/releases/tag/v0.1.3
  License: MIT
*/
(function(angular) {
  'use strict';


  //--- Custom Error

  var LibError = (function() {
    var ClassDef = function(message) {
      this.name = 'Library Unavailable Error';
      this.message = message;
    };

    ClassDef.prototype = new Error();

    return ClassDef;
  })();


  //--- Check

    // angular
  if(!angular) throw new LibError('AngularJS');

    // angular mocks namespace
  if(!angular.mock) throw new LibError('AngularJS Mocks (angular-mocks.js)');


  //--- regexpUrl

  var regexpUrl = (function() {

   var checkType = function(obj){
      return Object.prototype.toString.call(obj).slice(8, -1);
    };

    var buildRegexp = function(sRegexp) {
      var outRegexp = /\/example$/;

      // replace '/' to '\/' for regexp
      sRegexp = sRegexp.replace(/\//g, '\\/');

      // check if regexp config with $ at end
      if(!sRegexp.match(/\$$/)) {
        sRegexp += '$';
      }

      outRegexp = new RegExp(sRegexp);

      return outRegexp;
    };

    var checkRegexp = function(regexp) {
      var outRegexp, objType = checkType(regexp);

      if('RegExp' === objType) { 
        outRegexp = regexp;
      } else if('String' === objType) {
        outRegexp = buildRegexp(regexp);
      } else {
        outRegexp = /_undefined_$/;
        throw 'wrong regexp definition : ' + regexp;
      }
      return outRegexp;
    };

    return function(regexp) {
      regexp = checkRegexp(regexp);
      return {
        test: function(url) {
          this.matches = url.match(regexp);
          return this.matches && this.matches.length > 0;
        }
      };
    };

  })();

  //--- getParams

  var getParams = (function() {

    return function(url) {
      if(!url.match(/\?/)) return null;
      var ret = {};
      var parts = (url.split('?')[1]).split('&');
      for (var i = 0, len = parts.length; i < len; i++) {
        var p = parts[i].split('=');
        // so strings will be correctly parsed:
        p[1] = decodeURIComponent(p[1].replace(/\+/g, " "));

        if (p[0].search(/\[\]/) >= 0) { // then it's an array
          p[0] = p[0].replace('[]','');
          if (typeof ret[p[0]] != 'object') ret[p[0]] = [];
          ret[p[0]].push(p[1]);
        } else {
          ret[p[0]] = p[1];
        }
      }
      return ret;
    };
    
  })();


  //--- Backend mock support 

    // add to angular-mocks namespace
  angular.mock.backend = (function() {

    //--- Singleton class definition : used to angular service

    var instance;

    var ClassDef = function() {
      if ( instance )
        return instance;
      instance = this;
    };

    ClassDef.prototype.config = function(injector) {
      injector.invoke(['$httpBackend', configAllow]);
      configResources(injector);
    };


    var configAllow = function(httpBackend) {      
      // Allow get html to load templates
      httpBackend.when('GET', regexpUrl(/.html$/)).passThrough();
    };

    //--- mocked resources

    var resources = [];

    ClassDef.addResource = function(resource) {
      if(resource) resources.push(resource);
    };

    var configResources = function(injector) {  
      var i = (resources.length - 1);
      
      while(i > -1) {
        injector.invoke(resources[i--]);
      }

    };

    //---

    return ClassDef;

  })();


  //--- Global Configs

  var MODULE_NAME = 'ngMockBackend';

  var RUN_LOOP_TIMEOUT = 500;

  //--- Module Definition

  var ngMockBackend = angular.module( MODULE_NAME, [] );

  //---

  ngMockBackend.service('ngMockBackendService', angular.mock.backend);

  ngMockBackend.factory('regexpUrl', function() { return regexpUrl; });

  ngMockBackend.factory('getParams', function() { return getParams; });

  // TODO: deprecated in futures versions
  ngMockBackend.factory('angular', function() { return angular; });
  ngMockBackend.factory('httpBackend', ['$httpBackend', function($httpBackend) { return $httpBackend; }]);

  //---

  // provider

    // You can also just use provide to blanket replace $httpBackend 
    // with the mock
  ngMockBackend.config(

    ['$provide', 

  function($provide) {

    // Decorate by passing in the constructor for mock $httpBackend
    $provide.decorator('$httpBackend', createHttpBackendMock);

  }]);

  //---

  // run

    // Mark urls that match regexp as a match,
    // you can pass this as the url argument to $httpBackend.[when|expect]
  ngMockBackend.run(

    ['$timeout', 'ngMockBackendService', '$injector',

  function($timeout, service, $injector) {

    service.config($injector);

    //---

    // A "run loop" of sorts to get httpBackend to 
    // issue responses and trigger the client code's callbacks
    var flushBackend = function() {
      try {
        $httpBackend.flush();
      } catch (err) {
        // ignore that there's nothing to flush
      }
      $timeout(flushBackend, RUN_LOOP_TIMEOUT);
    };
    $timeout(flushBackend, RUN_LOOP_TIMEOUT);

  }]);

})(window.angular);