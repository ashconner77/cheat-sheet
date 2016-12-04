(function(){
    "use strict";

     function navController(){
        
    }

    var app = angular.module('cheatSheet');

    app.component('navComponent', {
        controller: navController,
        controllerAs: 'vm',
        templateUrl: 'src/nav/nav.component.html'
    }); 

})();