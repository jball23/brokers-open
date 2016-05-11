"use strict";

(function(){
  angular
  .module("users")
  .controller("usersIndexController", ["UserFactory",
    IndexController
  ])

  function IndexController(UserFactory){
    this.users = UserFactory.query();
    this.sort_data_by = function(name){
     this.sort_on = name;
     this.is_descending = !(this.is_descending);

     // this remains bound?
   }
  }
})();
