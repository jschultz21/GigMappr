'use strict';

(function(){
  angular
  .module("concerts")
  .factory("ConcertFactory", ["$resource", ConcertFactoryFunction]);

  function ConcertFactoryFunction($resource){
    return $resource("http://localhost:3000/concerts/:id",{},{update: {method: "PUT"}
  });
}

}());
