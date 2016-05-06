"use strict";

(function(){
  angular
  .module("listings")
  .factory("ListingFactory",[
    "$resource",
    FactoryFunction
  ])

  function FactoryFunction($resource){
    return $resource("http://localhost:3000/listings/:id", {}, {
      update: {method: "PUT"}
    });
  }
}());
