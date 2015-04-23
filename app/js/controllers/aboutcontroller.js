/**
 * @class WePredict.aboutController
 * @description Controller that controllers the About view. Sets View Controller
 */
wepredictApp.controller('aboutController', ['myService','$scope', function(myService,$scope) {
    var obj = myService.get();
    $scope.message = 'About This Site';
}]);