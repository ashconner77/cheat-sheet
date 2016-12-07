(function(){

    "use strict";

    var app = angular.module("cheatSheet");

    app.factory("listFactory", ['$http', '$q', listFactory]);

    function listFactory($http, $q){

        var list = [];

        var listFactory = {
            getListData: getListData
        }
        return listFactory;

        function getListData(){
            
            if(list.length > 0){
                return $q.when(list);
            } else {
                return $http.get("src/data/data.json")
                    .then(function(response){
                        list = response.data;
                        return response.data;
                    })
            }
        }
    }
})();