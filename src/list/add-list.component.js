(function(){

    "use strict";

    var app = angular.module("cheatSheet");

    app.component("addList",{
        controller: addListController,
        controllerAs: "vm",
        templateUrl: "src/list/add-list.component.html"
    });

    function addListController(){

    }
})();