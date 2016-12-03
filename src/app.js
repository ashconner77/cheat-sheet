(function(){
  "use strict";

  // $('body').html('Hello');

  var app = angular.module("cheatSheet", [
    'ngRoute',
    ]);


  app.config(['$routeProvider',
    function($routeProvider){
      $routeProvider
        .when("/main", {
          template: '<app-about></app-about>'
        })
        .otherwise({
          redirectTo: "/"
        });
    }
  ]);
  

})();
