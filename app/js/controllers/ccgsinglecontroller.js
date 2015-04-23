/**
 * @class WePredict.ccgController
 * @description Controller that controllers the CCG view. Sets View Controller
 */

wepredictApp.controller('ccgController', ['myService','dataFactory','$scope','$location','$timeout','$route', function(myService,dataFactory,$scope,$location,$timeout,$route) {
    var obj = myService.get();
    $scope.ccgid = obj.dec;
    $scope.ccgname = obj.dec;
    $scope.message = obj.dec;

    $scope.practiceSelected = {}

    dataFactory.getPracticeList(obj.dec)
        .success(function (data) {
            $scope.practice = data;
            $scope.practiceSelected = $scope.practice[0];
        })
        .error(function (error) {
            $scope.message = 'Unable to load customer data: ' + error.message;
        });



    /**
     * @name $scope.update
     * @function update
     * @memberOf WePredict.ccgController
     * @description  Put Data into Service and go to Practice page
     *
     */
    $scope.update = function() {
        $timeout(function() {
            var obj = {prac: $scope.practiceSelected.Practice_Name, dec: $scope.ccgname ,pracid: $scope.practiceSelected.Practice_Code};
            myService.set(obj);
            $location.path('practice');
            $scope = $scope || angular.element(document).scope();
            $scope.$apply();
        });
    }

    /**
     * @name $scope.newPage
     * @function newPage
     * @memberOf WePredict.ccgController
     * @description  Put Data into Service and reload the page
     */

    $scope.newPage = function() {
        var obj = {prac: $scope.practiceSelected.Practice_Name, dec: $scope.ccgname ,pracid: $scope.practiceSelected.Practice_Code};
        myService.set(obj);
        $route.reload();
    }
}]);





