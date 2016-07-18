"use strict";

(function(){
  angular
  .module("concerts")
  .controller("ConcertIndexController", [
    "ConcertFactory",
    "$stateParams",
    "$state",
    ConcertIndexControllerFunction
  ]);

  function ConcertIndexControllerFunction(concertFactory, $stateParams, $state){

    this.concerts = concertFactory.query();
  }
}());
