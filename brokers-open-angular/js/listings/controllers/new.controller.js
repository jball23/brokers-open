"use strict";
(function(){
  angular
  .module("listings")
  .controller("listingsNewController", ["ListingFactory", "$state", NewController])

  function NewController(ListingFactory, $state){

    var vm = this
    vm.listing = new ListingFactory();
    vm.create = function(){
      vm.listing.$save().then(function(){
        $state.go('listingsIndex')
      });
    }
  }
})();
