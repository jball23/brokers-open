"use strict";
(function(){
  angular
  .module("listings")
  .controller("listingsNewController", ["ListingFactory", "$state", NewController])

  function NewController(ListingFactory, $state){
    var vm = this
    vm.listing = new ListingFactory();
    vm.create = function($state){
      vm.listing.$save()
    }
  }
})();
