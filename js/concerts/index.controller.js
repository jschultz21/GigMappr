"use strict";

(function(){
  angular
  .module("concerts")
  .controller("ConcertIndexController", [
    "ConcertFactory",
    "$state",
    "$stateParams",
    "$scope",
    "CommentFactory",
    ConcertIndexControllerFunction
  ]);

  function ConcertIndexControllerFunction(ConcertFactory, $state, $stateParams, $scope, CommentFactory){
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
