"use strict";
(function(){
  angular
  .module("users")
  .controller("usersNewController", ["UserFactory", "$state", NewController])

  function NewController(UserFactory, $state){
    var vm = this
    vm.user = new UserFactory();
    vm.create = function(){
      vm.user.$save().then(function(){
        $state.go('usersIndex')
      });
    }
  }
})();
