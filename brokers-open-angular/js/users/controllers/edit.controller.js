"use strict";

(function(){
  angular
  .module("users")
  .controller("usersEditController",[
    "UserFactory",
    "$stateParams",
    "$state",
    EditController
  ])

  function EditController (UserFactory, $stateParams, $state){
    this.user = UserFactory.get({id: $stateParams.id})
    this.update = function(){
      this.user.$update({id: $stateParams.id})
    }
    this.destroy = function(){
      this.user.$delete({id: $stateParams.id}).then(function(){
        $state.go('usersIndex')
      });
    }
  }
})();
