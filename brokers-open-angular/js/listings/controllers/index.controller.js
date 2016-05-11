"use strict";

(function(){
  angular
  .module("listings")
  .controller("listingsIndexController", ["ListingFactory", "$http",
    IndexController
  ])

  function IndexController(ListingFactory, $http){
    var addresses = []
    this.listings = ListingFactory.query(function(response){
      response.forEach(function(listing){
        addresses.push(listing.address + " " + listing.city + " " + listing.state + " " + listing.zipcode)
      })
      var baseUrl = 'http://maps.googleapis.com/maps/api/geocode/json?address='
      addresses.forEach(function(address){

        $http({
          method: 'GET',
          url: baseUrl + address + "&sensor=false"
        }).then(function(response){
          var latlng = new google.maps.LatLng(response.data.results[0].geometry.location.lat, response.data.results[0].geometry.location.lng);
          var marker = new google.maps.Marker({
            position: latlng,
            map: map
          })
        })
      })
    })

    var map;
    this.initMap = function() {

        var mapOptions = {
          zoom: 8,
          center: {lat: 38.889931, lng: -77.009003}
          // mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        map = new google.maps.Map(document.getElementById('map'), mapOptions);

      }
  }


})();
