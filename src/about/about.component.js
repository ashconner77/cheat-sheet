(function(){
    "use strict";
    
    var app = angular.module("cheatSheet");

    app.component("appAbout", {
          templateUrl: 'src/about/about.component.html',
          controller: aboutController,
          controllerAs: 'vm'
    });

    function aboutController(){
        
    };

})();

