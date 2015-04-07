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

    dataFactory.getCCGCOPDAdmin = function (practice) {
        return $http.get(urlBase+'/ccg/COPDAdmissions/'+encodeURIComponent(practice));
    };


    dataFactory.getCCGSmoking = function (practice) {
        return $http.get(urlBase+'/ccg/smoking/'+encodeURIComponent(practice));
    };

    dataFactory.getCCGFlu = function (practice) {
        return $http.get(urlBase+'/ccg/flu/'+encodeURIComponent(practice));
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






    dataFactory.getPracticeAsmatha = function (practice) {
        return $http.get(urlBase+'/practice/asmatha/'+encodeURIComponent(practice));
    };

    dataFactory.getPracticeCHD = function (practice) {
        return $http.get(urlBase+'/practice/chd/'+encodeURIComponent(practice));
    };

    dataFactory.getPracticeCOPDAdmin = function (practice) {
        return $http.get(urlBase+'/practice/COPDAdmissions/'+encodeURIComponent(practice));
    };


    dataFactory.getPracticeSmoking = function (practice) {
        return $http.get(urlBase+'/practice/smoking/'+encodeURIComponent(practice));
    };

    dataFactory.getPracticeFlu = function (practice) {
        return $http.get(urlBase+'/practice/flu/'+encodeURIComponent(practice));
    };


    dataFactory.getPracticeObesity = function (practice) {
        return $http.get(urlBase+'/practice/obesity/'+encodeURIComponent(practice));
    };

    dataFactory.getPracticeCOPD = function (practice) {
        return $http.get(urlBase+'/practice/copd/'+encodeURIComponent(practice));
    };

    return dataFactory;


}]);
