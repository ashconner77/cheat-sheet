describe('List Component', function(){

    var element;
    var scope; 

    beforeEach(function(){
        angular.module('cheatSheet');
        bard.inject('$rootScope', '$compile');

        scope = $rootScope.$new();
        element = angular.element('<list-component></list-component>');
        element = $compile(element)(scope);
        scope.$apply();
    });

    it('should have a scope', function(){
        expect(scope).toBeDefined();
    });

    // it('should render a table', function(){
    //     var table = element.find('table');
    //     expect(table.)
    // });

    // it('should render', function(){
    //     var h3 = element.find( document.querySelector('#todoHeader'));
    //     expect(h3.text()).toBe('To-Do List');
    // });
});