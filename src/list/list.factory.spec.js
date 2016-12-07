"use strict";
describe('List Factory', function(){

    beforeEach(function(){
        bard.appModule('cheatSheet');
        bard.inject('$http', '$httpBackend', '$q', 'listFactory');
    });

    it('should exist', function(){
        expect(listFactory).toBeDefined();
    });



});