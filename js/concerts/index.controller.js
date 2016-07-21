"use strict";

(function(){
  angular
  .module("concerts")
  .controller("ConcertIndexController", [
    "$state",
    "$scope",
    ConcertIndexControllerFunction
  ]);

  function ConcertIndexControllerFunction($state, $scope, citySearch){
    var first = this;
    first.citySearch = citySearch;

    $scope.changeUrl = function() {
      $state.go("concertCityIndex", ({city: $scope.global.search}))
    }
  }
})();
