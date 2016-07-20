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

      function ConcertShowControllerFunction(ConcertFactory, $stateParams, $scope, uiGmapGoogleMapApi){
        this.concert = ConcertFactory.get({id: $stateParams.id});
        console.log(this.concert)

        $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
      }
})();
