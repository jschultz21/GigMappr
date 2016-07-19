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

<<<<<<< HEAD
  function ConcertIndexControllerFunction(ConcertFactory, $stateParams, $state, $scope){
    var self= this;
    self.concerts = ConcertFactory.query();

=======
  function ConcertIndexControllerFunction(ConcertFactory, $state, $stateParams, $scope){
    var vm = this
    vm.concerts = ConcertFactory.query();
>>>>>>> 9b4caa0ae878ab367e41fe1a96afd503757027ac
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
      vm.concert.$save().then(function(response){
        $state.go("concertShow", ({id: response.id}));
      })
    }
  }
})();
