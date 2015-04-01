/**
 * Created by robert on 12/03/15.
 */
wepredictApp.factory('dataFactory', ['$http', function($http) {

    var urlBase = 'http://wepredict.robrotheram.com';
    var dataFactory = {};

    dataFactory.getAsthma = function () {
        return $http.get(urlBase+'/getasmtha?limit=5');
    };

    dataFactory.getCCG = function () {
        return $http.get(urlBase+'/ccg');
    };

    dataFactory.getPracticeList = function (practice) {
        return $http.get(urlBase+'/practice/'+encodeURIComponent(practice));
    };

    return dataFactory;


}]);
