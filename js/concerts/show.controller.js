"use strict";

(function(){
    angular
      .module("concerts")
      .controller("ConcertShowController", [
        "ConcertFactory",
        "$stateParams",
        "$scope",
        ConcertShowControllerFunction
      ]);

      function ConcertShowControllerFunction(ConcertFactory, $stateParams, $scope){
        var vm = this;


        ConcertFactory.get({id: $stateParams.id}).$promise.then(function(response){
          vm.concert = response;

          vm.map = { center: { latitude: vm.concert.venue_latitude, longitude: vm.concert.venue_longitude }, zoom: 6, bounds: {} };
          vm.marker = {
            id: 0,
            coords: {
              latitude: vm.concert.venue_latitude,
              longitude: vm.concert.venue_longitude
            },
            options: { draggable: true },
            bounds: {}
          };

        })





      };

})();
