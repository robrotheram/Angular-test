describe('Unit: mainController', function() {
    // Load the module with MainController
    beforeEach(module('scotchApp'));

    var ctrl, scope;
    // inject the $controller and $rootScope services
    // in the beforeEach block
    beforeEach(inject(function($controller, $rootScope) {
        // Create a new scope that's a child of the $rootScope
        scope = $rootScope.$new();
        // Create the controller
        ctrl = $controller('mainController', {
            $scope: scope
        });
    }));

    it('should create $scope.greeting when calling sayHello',
        function() {
            var x = 55
            expect(x).toEqual(55);
        });

    it('alert',
        function() {
            scope.alert("","");
            var x = 55
            expect(x).toEqual(55);
        });

    it('should create $scope.greeting when calling sayHello',
        function() {
            var x = 55
            expect(x).toEqual(55);
        });


    it('should create $scope.greeting when calling sayHello',
        function() {
            var x = 55
            expect(x).toEqual(55);
        });

    it('alert',
        function() {
            scope.alert("","");
            var x = 55
            expect(x).toEqual(55);
        });

    it('should create $scope.greeting when calling sayHello',
        function() {
            var x = 55
            expect(x).toEqual(55);
        });


    it('should create $scope.greeting when calling sayHello',
        function() {
            var x = 55
            expect(x).toEqual(55);
        });


    it('alert',
        function() {
            scope.alert("","");
            var x = 55
            expect(x).toEqual(55);
        });

    it('should create $scope.greeting when calling sayHello',
        function() {
            var x = 55
            expect(x).toEqual(55);
        });
})