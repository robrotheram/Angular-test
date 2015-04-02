/**
 * Created by robert on 12/03/15.
 */

// create the controller and inject Angular's $scope
wepredictApp.controller('mainController',['myService','$scope','$route', '$window', '$location','dataFactory','$timeout',
    function(myService,$scope,$route, $window, $location,dataFactory,$timeout) {


        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };
        $scope.message = 'Everyone come and see how good I look!';
        $scope.alert = function(id,desc){
            $timeout(function() {
                var obj = {name:id,dec:desc};
                myService.set(obj);
                console.log(id+" | "+desc);
                $location.path('ccg');
                $scope = $scope || angular.element(document).scope();
                $scope.$apply();
            });
        };


        $scope.ccgSelected = {};
        $scope.update = function() {

            $timeout(function() {
                var obj = {dec: $scope.ccgSelected.CCG_Name};
                myService.set(obj);
                $location.path('ccg');
                $scope = $scope || angular.element(document).scope();
                $scope.$apply();
            });
        };

        dataFactory.getCCG()
            .success(function (data) {
                $scope.ccg = data;
                $scope.ccgSelected = $scope.ccg[1];
            })
            .error(function (error) {
                $scope.message = 'Unable to load customer data: ' + error.message;
            });


    }]);