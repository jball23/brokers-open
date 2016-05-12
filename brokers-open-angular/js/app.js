"use strict";

(function(){
  angular
  .module("brokers_open", [
    "ui.router",
    "listings",
    "users",
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .filter('boolText', boolText)

  function RouterFunction($stateProvider){
    $stateProvider
    .state("Index",{
      url: "/",
      templateUrl:"js/templates/index.html"
    })
    .state("listingsIndex", {
      url: "/listings",
      templateUrl: "js/listings/templates/index.html",
      controller: "listingsIndexController",
      controllerAs: "listingsIndexVm"
    })
    .state("listingsNew",{
      url: "/listings/new",
      templateUrl: "js/listings/templates/new.html",
      controller: "listingsNewController",
      controllerAs:"listingsNewVm"
    })
    .state("listingsShow",{
      url: "/listings/:id",
      templateUrl: "js/listings/templates/show.html",
      controller: "listingsShowController",
      controllerAs: "listingsShowVm"
    })
    .state("listingsEdit",{
      url: "/listings/:id/edit",
      templateUrl: "js/listings/templates/edit.html",
      controller: "listingsEditController",
      controllerAs: "listingsEditVm"
    })
    .state("usersIndex", {
      url: "/users",
      templateUrl: "js/users/templates/index.html",
      controller: "usersIndexController",
      controllerAs: "usersIndexVm"
    })
    .state("usersNew",{
      url: "/users/new",
      templateUrl: "js/users/templates/new.html",
      controller: "usersNewController",
      controllerAs: "usersNewVm"
    })
    .state("usersShow",{
      url: "/users/:id",
      templateUrl: "js/users/templates/show.html",
      controller: "usersShowController",
      controllerAs: "usersShowVm"
    })
    .state("usersEdit",{
      url: "/users/:id/edit",
      templateUrl: "js/users/templates/edit.html",
      controller: "usersEditController",
      controllerAs:"usersEditVm"
    })
  };

  function boolText() {
    return function(boolValue) {
      if (boolValue === true)
      return "Yes";
      else {
        return "No"
      }
    }
  }
})();
