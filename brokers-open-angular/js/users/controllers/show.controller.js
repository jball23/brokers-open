"use strict";

(function(){
  angular
  .module("users")
  .controller("usersShowController", ["UserFactory", "$stateParams", ShowControllerFunc])

  function ShowControllerFunc(UserFactory, $stateParams){
    var vm = this
    this.user = UserFactory.get({id:$stateParams.id})
    console.log (vm.user)
  }
})();
