'use strict';

(function(){
  angular
  .module("project3", ["ui.router", "concerts", "uiGmapgoogle-maps"])
  .config([
    "$stateProvider",
    'uiGmapGoogleMapApiProvider',
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
    })
    .state("concertShow", {
      url: "/concerts/:id",
      templateUrl: "js/concerts/show.html",
      controller: "ConcertShowController",
      controllerAs: "ConcertShowViewModel"
    });
  }
}());
