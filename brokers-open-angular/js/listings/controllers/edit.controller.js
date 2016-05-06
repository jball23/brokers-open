"use strict";

(function(){
  angular
  .module("listings")
  .controller("listingsEditController",[
    "ListingFactory",
    "$stateParams",
    "$state",
    EditController
  ])

  function EditController (ListingFactory, $stateParams, $state){
    this.listing = ListingFactory.get({id: $stateParams.id})
    this.update = function(){
      this.listing.$update({id: $stateParams.id}).then(function(){
        $state.go('listingsIndex')
      });
    }
    this.destroy = function(){
      this.listing.$delete({id: $stateParams.id}).then(function(){
        $state.go('listingsIndex')
      });
    }
  }
})();
