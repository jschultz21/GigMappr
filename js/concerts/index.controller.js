"use strict";

(function(){
  angular
  .module("concerts")
  .controller("ConcertIndexController", [
    "$state",
    "$stateParams",
    "$scope",
    ConcertIndexControllerFunction
  ]);

  function ConcertIndexControllerFunction($state, $stateParams, $scope){
    $scope.changeUrl = function() {
      $state.go("concertCityIndex", ({city: $scope.global.search}))
    }
  }
})();
