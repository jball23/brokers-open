"use strict";

(function(){
  angular
  .module("users")
  .controller("usersShowController", ["UserFactory", "$stateParams", ShowControllerFunc])

  function ShowControllerFunc(UserFactory, $stateParams){
    this.user = UserFactory.get({id:$stateParams.id})
  }
})();
