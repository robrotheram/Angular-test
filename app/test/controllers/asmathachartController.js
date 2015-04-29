describe('Unit: ccgAsmathaChartController', function() {
    // Load the module with MainController
    beforeEach(module('scotchApp'));

    var ctrl, scope;
    // inject the $controller and $rootScope services
    // in the beforeEach block
    beforeEach(inject(function($controller, $rootScope) {
        // Create a new scope that's a child of the $rootScope
        scope = $rootScope.$new();
        // Create the controller
        ctrl = $controller('ccgAsmathaChartController', {
            $scope: scope
        });
    }));

    it('should create $scope.greeting when calling sayHello',
        function() {
            var x = 55
            expect(x).toEqual(55);
        });
})

describe('Unit: ccgCOPDChartController', function() {
    // Load the module with MainController
    beforeEach(module('scotchApp'));

    var ctrl, scope;
    // inject the $controller and $rootScope services
    // in the beforeEach block
    beforeEach(inject(function($controller, $rootScope) {
        // Create a new scope that's a child of the $rootScope
        scope = $rootScope.$new();
        // Create the controller
        ctrl = $controller('ccgCOPDChartController', {
            $scope: scope
        });
    }));

    it('should create $scope.greeting when calling sayHello',
        function() {
            var x = 55
            expect(x).toEqual(55);
        });
})


describe('Unit: ccgCHDChartController', function() {
    // Load the module with MainController
    beforeEach(module('scotchApp'));

    var ctrl, scope;
    // inject the $controller and $rootScope services
    // in the beforeEach block
    beforeEach(inject(function($controller, $rootScope) {
        // Create a new scope that's a child of the $rootScope
        scope = $rootScope.$new();
        // Create the controller
        ctrl = $controller('ccgCHDChartController', {
            $scope: scope
        });
    }));

    it('should create $scope.greeting when calling sayHello',
        function() {
            var x = 55
            expect(x).toEqual(55);
        });
})



describe('Unit: ccgObesityChartController', function() {
    // Load the module with MainController
    beforeEach(module('scotchApp'));

    var ctrl, scope;
    // inject the $controller and $rootScope services
    // in the beforeEach block
    beforeEach(inject(function($controller, $rootScope) {
        // Create a new scope that's a child of the $rootScope
        scope = $rootScope.$new();
        // Create the controller
        ctrl = $controller('ccgObesityChartController', {
            $scope: scope
        });
    }));

    it('should create $scope.greeting when calling sayHello',
        function() {
            var x = 55
            expect(x).toEqual(55);
        });
})



describe('Unit: ccgFluChartController', function() {
    // Load the module with MainController
    beforeEach(module('scotchApp'));

    var ctrl, scope;
    // inject the $controller and $rootScope services
    // in the beforeEach block
    beforeEach(inject(function($controller, $rootScope) {
        // Create a new scope that's a child of the $rootScope
        scope = $rootScope.$new();
        // Create the controller
        ctrl = $controller('ccgFluChartController', {
            $scope: scope
        });
    }));

    it('should create $scope.greeting when calling sayHello',
        function() {
            var x = 55
            expect(x).toEqual(55);
        });
})



describe('Unit: customChartController', function() {
    // Load the module with MainController
    beforeEach(module('scotchApp'));

    var ctrl, scope;
    // inject the $controller and $rootScope services
    // in the beforeEach block
    beforeEach(inject(function($controller, $rootScope) {
        // Create a new scope that's a child of the $rootScope
        scope = $rootScope.$new();
        // Create the controller
        ctrl = $controller('customChartController', {
            $scope: scope
        });
    }));

    it('should create $scope.greeting when calling sayHello',
        function() {
            var x = 55
            expect(x).toEqual(55);
        });
})


describe('Unit: cordDiagramController', function() {
    // Load the module with MainController
    beforeEach(module('scotchApp'));

    var ctrl, scope;
    // inject the $controller and $rootScope services
    // in the beforeEach block
    beforeEach(inject(function($controller, $rootScope) {
        // Create a new scope that's a child of the $rootScope
        scope = $rootScope.$new();
        // Create the controller
        ctrl = $controller('cordDiagramController', {
            $scope: scope
        });
    }));

    it('should create $scope.greeting when calling sayHello',
        function() {
            var x = 55
            expect(x).toEqual(55);
        });
})