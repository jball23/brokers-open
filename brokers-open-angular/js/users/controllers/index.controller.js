"use strict";

(function(){
  angular
  .module("users")
  .controller("usersIndexController", ["UserFactory",
    IndexController
  ])

  function IndexController(UserFactory){
    this.users = UserFactory.query();
  }
})();
