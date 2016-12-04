(function(){
  "use strict";

  // $('body').html('Hello');

  var app = angular.module("cheatSheet", [
    'ngRoute',
    ]);


  app.config(['$routeProvider',
    function($routeProvider){
      $routeProvider
        .when("/about", {
          template: '<app-about></app-about>'
        })
        .when("/list", {
          template:"<list-component></list-component>"
        })
        .when("/board", {
          template: "<white-board></white-board>",
        })
        .otherwise({
          redirectTo: "/"
        });
    }
  ]);
  

})();
