(function(){
    "use strict";

    var app = angular.module("cheatSheet");

    app.component("listComponent", {
        templateUrl: "src/list/list.component.html",
        controller: listController,
        controllerAs: "vm",
    });

    function listController($http){

        var vm = this;

        vm.listData = [];
        vm.showAdd = false;
        vm.toggleAdd = toggleAdd;

        vm.$onInit = function(){
            // get data from data.json for now
            getData($http)
                .then(function(data){
                    
                    if(data){
                        vm.listData = data;
                    } else{
                        vm.listData = [];
                    }
                });
        };

        // todo; move to service
        function getData($http){
            return $http.get("src/data/data.json")
                .then(function(response){
                    return response.data;
                })
        }

        function toggleAdd(){
            vm.showAdd = !vm.showAdd;
        }

    };
})();