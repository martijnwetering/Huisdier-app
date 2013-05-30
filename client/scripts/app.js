'use strict';

angular.module('angularApp', ['$strap.directives'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/search', {
        templateUrl: 'views/menus/search.html',
        controller: 'SearchCtrl'
      })
      .when('/vermist', {
        templateUrl: 'views/menus/vermistMenu.html',
        controller: 'SearchCtrl'
      })
      .when('/asiel', {
        templateUrl: 'views/menus/asielMenu.html',
        controller: 'SearchCtrl'
      })
      .when('/gebruiker', {
        templateUrl: 'views/menus/gebruikerMenu.html',
        controller: 'SearchCtrl'
      })
      .when('/vermistWijzigen', {
        templateUrl: 'views/menus/vermistWijzigen.html',
        controller: 'SearchCtrl'
      })
      .when('/registrerenOpvang', {
        templateUrl: 'views/menus/registrerenOpvang.html',
        controller: 'SearchCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
