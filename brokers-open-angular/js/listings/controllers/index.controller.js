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


    var initialLocation;
    var siberia = new google.maps.LatLng(60, 105);
    var newyork = new google.maps.LatLng(40.69847032728747, -73.9514422416687);
    var browserSupportFlag =  new Boolean();
    var map;
    this.initMap = function() {

        var mapOptions = {
          zoom: 8,
          center: {lat: 38.889931, lng: -77.009003}
        }
        map = new google.maps.Map(document.getElementById('map'), mapOptions);

        // Try W3C Geolocation (Preferred)
        if(navigator.geolocation) {
          browserSupportFlag = true;
          navigator.geolocation.getCurrentPosition(function(position) {
            initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
            map.setCenter(initialLocation);
          }, function() {
            handleNoGeolocation(browserSupportFlag);
          });
        }
        // Browser doesn't support Geolocation
        else {
          browserSupportFlag = false;
          handleNoGeolocation(browserSupportFlag);
        }

        function handleNoGeolocation(errorFlag) {
          if (errorFlag == true) {
            alert("Geolocation service failed.");
            initialLocation = newyork;
          } else {
            alert("Your browser doesn't support geolocation. We've placed you in Siberia.");
            initialLocation = siberia;
          }
          map.setCenter(initialLocation);
        }
      }

    }
    
})();
