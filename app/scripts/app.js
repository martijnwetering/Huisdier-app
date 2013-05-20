'use strict';

angular.module('angularApp', ["google-maps"])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MapCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
