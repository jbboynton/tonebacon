/**
 * Module definition file.
 */

var angular = require('angular');
require('angular-route');
require('angular-ui-bootstrap');

var app = angular.module('tonebacon', [
  'ngRoute',
  'ui.bootstrap'
]);

require('./components');
// require('./filters');
// require('./services');
// require('./controllers');

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'HomeCtrl as home',
      // templateUrl: 'app/views/home.html'
    })
    .when('/login', {
      controller: 'LoginCtrl as login',
      templateUrl: 'app/components/login/login.html'
    })
    .when('/demotool', {
      controller: 'DemoToolCtrl as demotool',
      templateUrl: 'app/components/demotool/demotool.html'
    })
    .otherwise({ redirectTo: '/' });
});
