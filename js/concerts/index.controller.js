"use strict";

(function(){
  angular
  .module("concerts")
  .controller("ConcertIndexController", [
    "ConcertFactory",
    "$state",
    "$stateParams",
    "$scope",
    ConcertIndexControllerFunction
  ]);


  function ConcertIndexControllerFunction(ConcertFactory, $state, $stateParams, $scope){
    var vm = this
    vm.concerts = ConcertFactory.query();
    function apiSearch($scope) {

      var service = ConcertFactory, eventName = 'concert';
      if ($rootScope.currentController == 'ConcertIndexController'){
        eventName = 'concert'

      }
      service.query({query: $scope.global.search}, function(response){
        $scope.$broadcast(eventName, response)
      });
    };
    vm.concert = new ConcertFactory();
    vm.create = function(){
      console.log(vm.concert)
      vm.concert.$save().then(function(response){
        $state.go("concertShow", ({id: response.id}));
      })
    }
  }
})();
