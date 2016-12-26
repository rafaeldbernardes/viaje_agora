'use strict';

/**
 * @ngdoc overview
 * @name viajeAgoraApp
 * @description
 * # viajeAgoraApp
 *
 * Main module of the application.
 */
angular
  .module('viajeAgoraApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMessages',
    'ui.bootstrap',
    'ui.select2',
    'ui.utils.masks'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/travel.html',
        controller: 'TravelCtrl',
        controllerAs: 'travel'
      })
      .when('/travel_list', {
        templateUrl: 'views/travel_list.html',
        controller: 'TravelList',
        controllerAs: 'travel_list'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
