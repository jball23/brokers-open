"use strict";

(function(){
  angular
  .module("listings")
  .controller("listingsShowController", ["ListingFactory", "$stateParams", ShowControllerFunc])

  function ShowControllerFunc(ListingFactory, $stateParams){
    this.listing = ListingFactory.get({id:$stateParams.id})
  }
})();
