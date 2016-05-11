"use strict";

(function(){
  angular
  .module("listings")
  .controller("listingsIndexController", ["ListingFactory",
    IndexController
  ])

  function IndexController(ListingFactory){

    this.listings = ListingFactory.query();

    var map;
    var myLatLng = new google.maps.LatLng(28.070011,83.24939);
    this.initMap = function() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: myLatLng,
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: "My Brokers Open"
        })
      }
  }


})();
