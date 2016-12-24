require('../../node_modules/simplemde/dist/simplemde.min.js');
/* wrapper component for simpleMde markdown editor  */
(function(){
    "use strict";

    var app = angular.module("cheatSheet");

    app.component("simpleMdeWrapper", {
         template: `
            <h4>Scribble a little something...</h4>
            
            <textarea></textarea
            
            <div>
                <button type="button" class="btn btn-primary pull-right" ng-click="vm.updateNote()">
                    Save <span class="glyphicon glyphicon-save"></span>
                </button>
            </div>
         `,
         controller: simpleController,
         controllerAs: 'vm',
         bindings: {
           note : "<",
        }
     });

    function simpleController(){

        var vm = this;     
        vm.mde = new SimpleMDE();
        vm.isolateNote = {};
        vm.updateNote = updateNote;


        vm.$onInit = function(){    
        
            // make a copy here to preserve our 1 way binding
            vm.isolateNote = vm.note ? angular.copy(vm.note) : {};

            // set up MDE initial value and change event
            vm.mde.value(vm.isolateNote.text);

            vm.mde.codemirror.on("change", function () {
                vm.isolateNote.text = vm.mde.value();
            });      
        };

        vm.$onChanges = function(){
            vm.isolateNote = vm.note ? angular.copy(vm.note) : {};
            vm.mde.value(vm.isolateNote.text);
        }

        function updateNote(){
            console.log('last note value is: ' + vm.isolateNote.text);
            // todo; pass back to parent component
        }
     
    }
})();