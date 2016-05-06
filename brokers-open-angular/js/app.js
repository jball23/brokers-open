"use strict";

(function(){
  angular
  .module("brokers_open", [
    "ui.router"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])

  function RouterFunction($stateProvider){
  $stateProvider
    .state("listingsIndex", {
    url: "/listings",
    templateUrl: "js/listings/templates/_index.html"
    })
  }
})();
