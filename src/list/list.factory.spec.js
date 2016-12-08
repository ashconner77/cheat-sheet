"use strict";
describe('List Factory', function(){

    beforeEach(function(){
        bard.appModule('cheatSheet');
        bard.inject('$http', '$httpBackend', '$q', '$rootScope', 'listFactory');
    });

    it('should exist', function(){
        expect(listFactory).toBeDefined();
    });

    it('should return a value from getListData', function(){
        $httpBackend.when('GET', 'src/data/data.json').respond(200, [{}]);

        listFactory.getListData()
            .then(function(data){
               expect(data).toBeDefined();
            });

        $httpBackend.flush();
    });

    it('should return an error if no data returned', function(){
        $httpBackend.when('GET', 'src/data/data.json')
                .respond(500, { data: { description: "Fatal testing error!"}});

        listFactory.getListData()
            .catch(function(data){
               expect(data).toBeDefined();
            });

        $httpBackend.flush();
    });

});