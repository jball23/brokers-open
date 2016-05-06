"use strict";

(function(){
  angular
  .module("listings")
  .controller("listingsIndexController", ["ListingFactory",
    IndexController
  ])

  function IndexController(ListingFactory){
    this.listings = ListingFactory.query();
  }
})();
