"use strict";

(function(){
  angular
  .module("concerts")
  .controller("ConcertIndexController", [
    "ConcertFactory",
    "$stateParams",
    "$state",
    ConcertIndexControllerFunction
  ]);

  function ConcertIndexControllerFunction(ConcertFactory, $stateParams, $state, $scope){
    var self= this;
    self.concerts = ConcertFactory.query();

    function apiSearch($scope) {
      console.log("1")
      var service = ConcertFactory, eventName = 'concert';
      if ($rootScope.currentController == 'ConcertIndexController'){
        eventName = 'concert'
        console.log("2")
      }
    service.query({query: $scope.global.search}, function(response){
     $scope.$broadcast(eventName, response)
   });
  };
    // $scope.$on('concert', function(event, data) {
    //     $scope.posts = data
  // })
}
}());
