wepredictApp.controller('practiceController', ['myService','dataFactory','$scope', function(myService,dataFactory,$scope) {
    var obj = myService.get();
    $scope.practice = obj.prac;
    $scope.ccgname = obj.dec;

    $scope.ccgdata = [
        [11975,  5871, 8916, 2868],
        [ 1951, 10048, 2060, 6171],
        [ 8010, 16145, 8090, 8045],
        [ 1013,   990,  940, 6907]
    ];





}]);


