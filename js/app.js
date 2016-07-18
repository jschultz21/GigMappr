'use strict';

(function(){
  angular
  .module("project3", ["ui.router", "concerts"])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction ($stateProvider){
    $stateProvider
    .state("welcome",{
      url: "",
      templateUrl: "welcome.html",
    })
    .state("concertIndex", {
      url: "/concerts",
      templateUrl: "js/concerts/index.html",
      controller: "ConcertIndexController",
      controllerAs: "ConcertIndexViewModel"
    });

  }
}());


// url: "/concerts/:city",
