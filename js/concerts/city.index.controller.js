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
