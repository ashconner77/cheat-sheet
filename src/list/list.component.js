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
        vm.deleteListItem = deleteListItem;
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

        function deleteListItem(item){
            if(item){
               for(var i = 0; i< vm.listData.length; i++){
                   if(vm.listData[i].id === item){
                       vm.listData.splice(i, 1);
                       break;
                   }
               }
            }
        }
    };

})();