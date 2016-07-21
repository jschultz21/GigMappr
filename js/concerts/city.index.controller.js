"use strict";

(function(){
  angular
  .module("concerts")
  .controller("ConcertCityIndexController", [
    "ConcertFactory",
    "$state",
    "$stateParams",
    "$scope",
    "$rootScope",
    "CommentFactory",
    ConcertCityIndexControllerFunction
  ]);

  function ConcertCityIndexControllerFunction(ConcertFactory, $state, $stateParams, $scope, $rootScope, CommentFactory, citySearch){
    var second = this;
    second.citySearch = citySearch;
    console.log("in the city controller");
    console.log(citySearch.city);
    citySearch.city = $stateParams.city;
    console.log($scope.global.search);
    var vm = this
    vm.concerts = ConcertFactory.query();


    vm.comments = CommentFactory.query();
    vm.comment = new CommentFactory();
    vm.addComment = function() {
      vm.comment.city = $rootScope.global.search
      console.log(vm.comment)
      vm.comment.$save().then(function(){
        vm.comment = {};
        $state.reload();
      });
    }
  }
})();
