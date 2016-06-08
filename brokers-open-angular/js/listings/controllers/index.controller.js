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

      var baseUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address='
      addresses.forEach(function(address){
        $http({
          method: 'GET',
          url: baseUrl + address + "&sensor=false"
        }).then(function(response){
          var latlng = new google.maps.LatLng(response.data.results[0].geometry.location.lat, response.data.results[0].geometry.location.lng);
          var markerInfo = response.data.results[0].formatted_address
          var contentString = '<div>'+ markerInfo +'</div>';
          var infowindow = new google.maps.InfoWindow({
            content: contentString
          });
          var marker = new google.maps.Marker({
            position: latlng,
            map: map
          })
          marker.addListener('click', function() {
            infowindow.open(map, marker);
          })
        })
      })
    })

    this.sort_data_by = function(name){
     this.sort_on = name;
     this.is_descending = !(this.is_descending);
   }

    this.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };



    var initialLocation;
    var siberia = new google.maps.LatLng(60, 105);
    var washingtonDc = new google.maps.LatLng(38.889931, -77.009003);
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
            initialLocation = washingtonDc;
          } else {
            alert("Your browser doesn't support geolocation. We've placed you in Siberia.");
            initialLocation = siberia;
          }
          map.setCenter(initialLocation);
        }
      }

    }

})();
