"use strict";

(function(){
  angular
  .module("concerts")
  .controller("ConcertIndexController", [
    "$state",
    "$scope",
    ConcertIndexControllerFunction
  ]);

  function ConcertIndexControllerFunction($state, $scope){
    $scope.changeUrl = function() {
      console.log($scope.global.search);
      $state.go("concertCityIndex", ({city: $scope.global.search}))
    }
  }
})();
