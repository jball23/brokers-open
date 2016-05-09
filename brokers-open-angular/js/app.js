"use strict";

(function(){
  angular
  .module("brokers_open", [
    "ui.router",
    "listings",
    "users"
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
    .state("listingsNew",{
      url: "listings/new",
      templateUrl: "js/listings/templates/_new.html",
      controller: "listingsNewController",
      controllerAs:"listingsNewVm"
    })
    .state("listingsShow",{
      url: "listings/:id",
      templateUrl: "js/listings/templates/_show.html",
      controller: "listingsShowController",
      controllerAs: "listingsShowVm"
    })
    .state("listingsEdit",{
      url: "listings/:id/edit",
      templateUrl: "js/listings/templates/_edit.html",
      controller: "listingsEditController",
      controllerAs: "listingsEditVm"
    })
    .state("usersIndex", {
      url: "/users",
      templateUrl: "js/users/templates/_index.html",
      controller: "usersIndexController",
      controllerAs: "usersIndexVm"
    })
    .state("usersNew",{
      url: "users/new",
      templateUrl: "js/users/templates/_new.html",
      controller: "usersNewController",
      controllerAs: "usersNewVm"
    })
    .state("usersShow",{
      url: "users/:id",
      templateUrl: "js/users/templates/_show.html",
      controller: "usersShowController",
      controllerAs: "usersShowVm"
    })
    .state("usersEdit",{
      url: "users/:id/edit",
      templateUrl: "js/users/templates/_edit.html",
      controller: "usersEditController",
      controllerAs:"usersEditVm"
    })
  };
})();
