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

//test

// require('./filters');
// require('./services');
// require('./controllers');

// app.config(function($routeProvider) {
//   $routeProvider
//     .when('/', {
//       controller: 'ListController as vm',
//       templateUrl: 'app/views/list.html'
//     })
//     .otherwise({ redirectTo: '/' });
// });
