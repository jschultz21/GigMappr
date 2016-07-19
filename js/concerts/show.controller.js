"use strict";

(function(){
    angular
      .module("concerts")
      .controller("ConcertShowController", [
        "ConcertFactory",
        "$stateParams",
        ConcertShowControllerFunction
      ]);

      function ConcertShowControllerFunction(ConcertFactory, $stateParams){
        this.concert = ConcertFactory.get({id: $stateParams.id});
        console.log(this.concert)
      }
})();
