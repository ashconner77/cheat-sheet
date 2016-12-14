(function(){

    "use strict";

    var app = angular.module("cheatSheet");

    app.component("addList",{
        controller: addListController,
        controllerAs: "vm",
        templateUrl: "src/list/add-list.component.html",
        bindings: {
           onAddItem: "&"
        }
    });

    function addListController(){
        var vm = this;

        vm.addItemToList = addItemToList;
        vm.resource = {}
         
        vm.$onInit = function(){
            vm.resource = {
                id: 0,
                name: '',
                link: '',
                type: ''
            }
        }

        function addItemToList(){
            if(vm.resource.name){

                vm.resource.id = Math.random();
                vm.onAddItem({
                    $event: {
                        newItem: vm.resource
                    }
                });
            }
            vm.resource = {};
        }

    }
})();