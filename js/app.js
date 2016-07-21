'use strict';

(function(){
  angular
  .module("project3", ["ui.router", "concerts"])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .service("citySearch", function citySearch() {
    var citySearch = this;

    citySearch.city = "Boston";
  });

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
    .state("concertCityIndex", {
      url: "/concerts/:city",
      templateUrl: "js/concerts/CityIndex.html",
      controller: "ConcertCityIndexController",
      controllerAs: "ConcertCityIndexViewModel"
    })
    .state("concertShow", {
      url: "/concerts/:id",
      templateUrl: "js/concerts/show.html",
      controller: "ConcertShowController",
      controllerAs: "ConcertShowViewModel"
    })
  }
}());
