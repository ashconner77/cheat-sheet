(function(){
    "use strict";

    var app = angular.module("cheatSheet");

    app.component("whiteBoard", {
        controller: boardController,
        controllerAs: "vm",
        templateUrl: "src/whiteboard/board.component.html"
    });

    function boardController(){

    };
})();