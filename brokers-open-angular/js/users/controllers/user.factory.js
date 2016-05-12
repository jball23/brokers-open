"use strict";

(function(){
  angular
  .module("users")
  .factory("UserFactory",[
    "$resource",
    FactoryFunction
  ])

  function FactoryFunction($resource){
    return $resource("https://brokers-open.herokuapp.com/users/:id", {}, {
      update: {method: "PUT"}
    })
  }

})();
