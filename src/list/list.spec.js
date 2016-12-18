"use strict";

describe('List Component', function(){

    var el;
    var scope; 
    var mockListFactory;

    beforeEach(module('cheatSheet'));
    beforeEach(module('templates'));

    beforeEach(function() {    
        var fakePromise;

        module(function($provide) {
            $provide.value('mockListFactory', {
                getListData: function() {
                    return fakePromise;
                }
            });
        });
        inject(function($q) {
            fakePromise = $q.when({});
        });
    });
    
        // beforeEach(module('cheatSheet', function($provide){

    //     mockListFactory = {
    //         getListData : function() { return fakedata; }
    //     };
    //     $provide.value('listFactory', mockListFactory);        
    // }));

    beforeEach(inject(function($rootScope, $compile){        
       // bard.inject('$rootScope', '$compile');

        scope = $rootScope.$new();
        el = angular.element('<list-component></list-component>');
        el = $compile(el)(scope);
        scope.$apply();

       
    }));

    it('should have a scope', function(){
        expect(scope).toBeDefined();
    });

    it('should render', function(){
        var h3 = element[0].find( document.querySelector('.todoHeader'));
        expect(h3.text()).toBe('To-Do List');
    });
});