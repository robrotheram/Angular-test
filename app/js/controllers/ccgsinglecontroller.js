/**
 * @class WePredict.ccgController
 * @description Controller that controllers the CCG view. Sets View Controller
 */

wepredictApp.controller('ccgController', ['myService','dataFactory','$scope','$location','$timeout','$route', function(myService,dataFactory,$scope,$location,$timeout,$route) {

    var obj = myService.get();

    $scope.ccgname = $location.search().ccg;
    $scope.message = $location.search().ccg;

    $scope.practiceSelected = {}

    dataFactory.getPracticeList($location.search().ccg)
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
        $location.path('practice').search({prac: $scope.practiceSelected.Practice_Name, dec: $scope.ccgname ,pracid: $scope.practiceSelected.Practice_Code});

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





