(function(){
    "use strict";

    var app = angular.module("cheatSheet");

    app.component("listComponent", {
        templateUrl: "src/list/list.component.html",
        controller: ["listFactory", listController],
        controllerAs: "vm",
    });

    function listController(listFactory){

        var vm = this;
                
        vm.addListItem = addListItem;
        vm.listData = [];
        vm.showAdd = false;
        vm.toggleAdd = toggleAdd;

        vm.$onInit = function(){
            // get data from data.json for now
            listFactory.getListData()
                .then(function(data){
                    
                    if(data){
                        vm.listData = data;
                    } else{
                        vm.listData = [];
                    }
                });
        };

        function toggleAdd(){
            vm.showAdd = !vm.showAdd;
        }

        // event callback fn
        function addListItem(event){
            if(event.newItem){
                vm.listData.push(event.newItem);
            }            
        }
    };

})();