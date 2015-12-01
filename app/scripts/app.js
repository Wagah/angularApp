'use strict';

/**
 * @ngdoc overview
 * @name myMovieAppApp
 * @description
 * # myMovieAppApp
 *
 * Main module of the application.
 */
angular
  .module('myMovieAppApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/contactus', {
        templateUrl: 'views/contactus.html',
        controller: 'ContactusCtrl',
        controllerAs: 'contactus'
      })
      
      .when('/newmovies', {
        templateUrl: 'views/newmovies.html',
        controller: 'NewmoviesCtrl',
        controllerAs: 'newmovies'
      })
      .when('/ourblogs', {
        templateUrl: 'views/ourblogs.html',
        controller: 'OurblogsCtrl',
        controllerAs: 'ourblogs'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
