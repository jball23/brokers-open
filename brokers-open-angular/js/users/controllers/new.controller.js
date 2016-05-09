"use strict";
(function(){
  angular
  .module("users")
  .controller("usersNewController", ["UserFactory", "$state", NewController])

  function NewController(UserFactory, $state){
    var vm = this
    vm.User = new UserFactory();
    vm.create = function($state){
      vm.User.$save()
    }
  }
})();
