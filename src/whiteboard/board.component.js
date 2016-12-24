
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

        vm.notes = [
            {
                id: 1,
                text: "here's a note thingie. **Booom**."
            },
            {
                id: 2,
                text: "Protractor requires web-driver to be installed and running."
            }
        ]

        // functions
        vm.addNote = addNote;
        vm.editNote = editNote;

        function addNote(){
            // todo; init a new mde-wrapper
        }

        function editNote(selectedNote){
            // here's the note we're editing now...
            vm.selectedNote = selectedNote;
        }
    };
})();

