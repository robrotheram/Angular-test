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

    dataFactory.getCCGAsmatha = function (practice) {
        return $http.get(urlBase+'/ccg/asmatha/'+encodeURIComponent(practice));
    };


    dataFactory.getCCGCHD = function (practice) {
        return $http.get(urlBase+'/ccg/chd/'+encodeURIComponent(practice));
    };


    dataFactory.getCCGObesity = function (practice) {
        return $http.get(urlBase+'/ccg/obesity/'+encodeURIComponent(practice));
    };

    dataFactory.getCCGCOPD = function (practice) {
        return $http.get(urlBase+'/ccg/copd/'+encodeURIComponent(practice));
    };

    dataFactory.getHeatMap  = function(){
        return $http.get(urlBase+'/ccg/heat_map');
    }


    return dataFactory;


}]);
