
(function(){
    "use strict";


    var app = angular.module("cheatSheet");

    app.component("whiteBoard", {
        controller: boardController,
        controllerAs: "vm",
        templateUrl: "src/whiteboard/board.component.html"
    });

    function boardController(){
        var vm = this;

       vm.note = {
           id: 1,
           text: "here's a note thingie. Booom."
       }
    };
})();

