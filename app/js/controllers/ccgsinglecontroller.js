wepredictApp.controller('ccgController', ['myService','dataFactory','$scope','$location','$timeout', function(myService,dataFactory,$scope,$location,$timeout) {
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


    $scope.update = function() {
        $timeout(function() {
            //console.log("ythadbakjdnaslkdnasldnasdasdasdasd" + JSON.stringify($scope.practiceSelected));

            var obj = {prac: $scope.practiceSelected.Practice_Name, dec: $scope.ccgname ,pracid: $scope.practiceSelected.Practice_Code};
            myService.set(obj);
            $location.path('practice');
            $scope = $scope || angular.element(document).scope();
            $scope.$apply();
        });
    }
}]);





