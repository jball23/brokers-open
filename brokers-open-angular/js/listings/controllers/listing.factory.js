"use strict";

(function(){
  angular
  .module("listings")
  .factory("ListingFactory",[
    "$resource",
    FactoryFunction
  ])

  function FactoryFunction($resource){
    return $resource("https://brokers-open.herokuapp.com/listings/:id", {}, {
      update: {method: "PUT"}
    })
  }
})();
