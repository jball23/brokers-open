"use strict";

(function(){
  angular
  .module("brokers_open", [
    "ui.router",
    "listings" //does it matter if this comes before/after ui.router?
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])

  function RouterFunction($stateProvider){
  $stateProvider
    .state("listingsIndex", {
    url: "/listings",
    templateUrl: "js/listings/templates/_index.html",
    controller: "listingsIndexController",
    controllerAs: "listingsIndexVm"
    })
    .state("listingsShow",{
      url: "listings/:id",
      templateUrl: "js/listings/templates/_show.html",
      controller: "listingsShowController",
      controllerAs: "listingsShowVm"
    })
    .state("listingsNew",{
      url: "listings/new",
      templateUrl: "js/listings/templates/_new.html",
      controller: "listingsNewController",
      controllerAs:"listingsNewVm"
    })
    .state("listingsEdit",{
      url: "listings/:id/edit",
      templateUrl: "js/listings/templates/_edit.html",
      controller: "listingsEditController",
      controllerAs:"listingsEditVm"
    })
  };
})();
