'use strict';

/**
 * @ngdoc function
 * @name viajeAgoraApp.controller:TravelCtrl
 * @description
 * # TravelCtrl
 * Controller of the viajeAgoraApp
 */
angular.module('viajeAgoraApp')
  .controller('TravelCtrl', function ($location, $cookieStore) {
    var self = this;

    self.travel            = {};
    self.cacheTravels      = $cookieStore.get('travels');
    self.vehicles          = ["Avião", "Ônibus"];
    self.contactName       = "";
    self.contactEmail      = "";
    self.originCities      = ["São José dos Campos", "Jacarei", "Campos do Jordão", "Penapolis"];
    self.destinyCities     = ["Rio de Janeiro", "São Paulo", "Buenos Aires"];
    self.travel.contacts   = [];
    self.travel.returnDate = new Date();
    self.travel.goingDate  = new Date();

    self.options = { };

    self.todayGoingDate = function() {
      self.travel.goingDate = new Date();
    };

    self.todayReturnDate = function() {
      self.travel.returnDate = new Date();
    };

    self.addContact = function() {
      self.travel.contacts.push({name: self.contactName, email: self.contactEmail});
      self.contactName = "";
      self.contactEmail = "";
    };

    self.removeContact = function(index) {
      self.travel.contacts.splice(index,1);
    };

    self.save = function(travel) {
      var cacheTravels = $cookieStore.get('travels');
      travel.goingDate  = moment(travel.goingDate).format('L');
      travel.returnDate = moment(travel.returnDate).format('L');

      if(cacheTravels === undefined) {
        $cookieStore.put('travels', [travel]);
      } else {
        cacheTravels.push(travel);
        $cookieStore.put('travels', cacheTravels);
      }

      $location.path('/travel_list'); 
    };
  });

