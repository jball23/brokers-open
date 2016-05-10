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

    var map;
    var initMap = function() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }

  }

})();
