"use strict";

(function(){
  angular
  .module("concerts")
  .controller("ConcertCityIndexController", [
    "ConcertFactory",
    "$state",
    "$stateParams",
    "$scope",
    "CommentFactory",
    ConcertCityIndexControllerFunction
  ]);

  function ConcertCityIndexControllerFunction(ConcertFactory, $state, $stateParams, $scope, CommentFactory){
    console.log("in the city controller")
    var vm = this
    vm.concerts = ConcertFactory.query();

    this.apiSearch = function($scope) {

      var service = ConcertFactory, eventName = 'concert';
      if ($rootScope.currentController == 'ConcertCityIndexController'){
        eventName = 'concert'
      }
      service.query({query: $scope.global.search}, function(response){
        console.log($scope.global.search)

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

    vm.comments = CommentFactory.query();
    vm.comment = new CommentFactory();
    vm.addComment = function() {
      vm.comment.city = $scope.global.search
      console.log(vm.comment)
      vm.comment.$save().then(function(){
        vm.comment = {};
        $state.reload();
      });
    }
  }
})();
