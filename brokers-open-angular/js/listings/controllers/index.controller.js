"use strict";

(function(){
  angular
  .module("listings")
  .controller("listingsIndexController", ["ListingFactory",
    IndexController
  ])

  function IndexController(ListingFactory){
    this.listings = ListingFactory.query();

    this.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
    this.hello = function() {
      console.log("hello");
    }

  }



})();
