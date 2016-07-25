"use strict";

(function(){
  angular
  .module("concerts")
  .controller("ConcertIndexController", [
    "ConcertFactory",
    "$state",
    "$stateParams",
    "$scope",
    "$location",
    "CommentFactory",
    ConcertIndexControllerFunction
  ]);

  function ConcertIndexControllerFunction(ConcertFactory, $state, $stateParams, $scope, $location, CommentFactory){

    var searchObject = $location.search();
    console.log(searchObject.city)

    var vm = this
    vm.concerts = ConcertFactory.query();
    $scope.changeUrl = function(){
      // $location.search('city', $scope.global.search);
    }

    vm.apiSearch = function($scope) {
      var service = ConcertFactory, eventName = 'concert';
      if ($rootScope.currentController == 'ConcertIndexController'){
        eventName = 'concert'
      }

      if (searchObject == true) {
      var search = searchObject
    }
      else {
        var search = $scope.global.search

      }
      service.query({query: search}, function(response){
        $scope.$broadcast(eventName, response)
      });
    };
    vm.concert = new ConcertFactory();
    vm.create = function(){
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
