'use strict';

/**
 * @ngdoc function
 * @name viajeAgoraApp.controller:TravelList
 * @description
 * # TravelList
 * Controller of the viajeAgoraApp
 */
angular.module('viajeAgoraApp')
  .controller('TravelList', function ($cookieStore) {
    var self = this;

    self.travels = $cookieStore.get('travels');
  });
