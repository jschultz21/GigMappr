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
        this.concert = ConcertFactory.get({id: $stateParams.id});
        console.log(this.concert)

        $scope.map = { center: { latitude: 40.1451, longitude: -99.6680 }, zoom: 6 };
        $scope.marker = {
          id: 0,
          coords: {
            latitude: 40.1451,
            longitude: -99.6680
          },
          options: { draggable: true },
        }
      }

})();
