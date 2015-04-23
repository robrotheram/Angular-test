/**
 * @class WePredict.dataFactory
 * @description Directive that Controls the map icon
 */
wepredictApp.factory('dataFactory', ['$http', function($http) {

    var urlBase = 'http://wepredict.robrotheram.com';
    var dataFactory = {};

    /**
     * @name dataFactory.getAsthma
     * @function getAsthma
     * @description Function  Used to get Data from the API
     * @memberOf WePredict.dataFactory
     * @returns {HttpPromise} Http A Http object. Uses callback functions to get the data inside the controller
     */
    dataFactory.getAsthma = function () {
        return $http.get(urlBase+'/getasmtha?limit=5');
    };

    /**
     * @name dataFactory.getCCG
     * @function getCCG
     * @description Function  Used to get Data from the API
     * @memberOf WePredict.dataFactory
     * @returns {HttpPromise} Http A Http object. Uses callback functions to get the data inside the controller
     */
    dataFactory.getCCG = function () {
        return $http.get(urlBase+'/ccg');
    };

    /**
     * @name dataFactory.getCCGData
     * @function getCCGData
     * @description Function  Used to get Data from the API
     * @memberOf WePredict.dataFactory
     * @param {String} practice String of the practice name
     * @returns {HttpPromise} Http A Http object. Uses callback functions to get the data inside the controller
     */

    dataFactory.getCCGData = function (practice) {
        return $http.get(urlBase+'/ccg/'+encodeURIComponent(practice));
    };

    /**
     * @name dataFactory.getPracticeList
     * @function getPracticeList
     * @description Function  Used to get Data from the API
     * @memberOf WePredict.dataFactory
     * @param {String} practice String of the practice name
     * @returns {HttpPromise} Http A Http object. Uses callback functions to get the data inside the controller
     */
    dataFactory.getPracticeList = function (practice) {
        return $http.get(urlBase+'/practice/'+encodeURIComponent(practice));
    };

    /**
     * @name dataFactory.getCCGAsmatha
     * @function getCCGAsmatha
     * @description Function  Used to get Data from the API
     * @memberOf WePredict.dataFactory
     * @param {String} practice String of the CCG name
     * @returns {HttpPromise} Http A Http object. Uses callback functions to get the data inside the controller
     */
    dataFactory.getCCGAsmatha = function (practice) {
        return $http.get(urlBase+'/ccg/asmatha/'+encodeURIComponent(practice));
    };
    /**
     * @name dataFactory.getCCGCHD
     * @function getCCGCHD
     * @description Function  Used to get Data from the API
     * @memberOf WePredict.dataFactory
     * @param {String} practice String of the CCG name
     * @returns {HttpPromise} Http A Http object. Uses callback functions to get the data inside the controller
     */


    dataFactory.getCCGCHD = function (practice) {
        return $http.get(urlBase+'/ccg/chd/'+encodeURIComponent(practice));
    };

    /**
     * @name dataFactory.getCCGCOPDAdmin
     * @function getCCGCOPDAdmin
     * @description Function  Used to get Data from the API
     * @memberOf WePredict.dataFactory
     * @param {String} practice String of the CCG name
     * @returns {HttpPromise} Http A Http object. Uses callback functions to get the data inside the controller
     */
    dataFactory.getCCGCOPDAdmin = function (practice) {
        return $http.get(urlBase+'/ccg/COPDAdmissions/'+encodeURIComponent(practice));
    };


    /**
     * @name dataFactory.getCCGSmoking
     * @function getCCGSmoking
     * @description Function  Used to get Data from the API
     * @memberOf WePredict.dataFactory
     * @param {String} practice String of the CCG name
     * @returns {HttpPromise} Http A Http object. Uses callback functions to get the data inside the controller
     */
    dataFactory.getCCGSmoking = function (practice) {
        return $http.get(urlBase+'/ccg/smoking/'+encodeURIComponent(practice));
    };

    /**
     * @name dataFactory.getCCGFlu
     * @function getCCGFlu
     * @description Function  Used to get Data from the API
     * @memberOf WePredict.dataFactory
     * @param {String} practice String of the CCG name
     * @returns {HttpPromise} Http A Http object. Uses callback functions to get the data inside the controller
     */
    dataFactory.getCCGFlu = function (practice) {
        return $http.get(urlBase+'/ccg/flu/'+encodeURIComponent(practice));
    };

    /**
     * @name dataFactory.getCCGObesity
     * @function getCCGObesity
     * @description Function  Used to get Data from the API
     * @memberOf WePredict.dataFactory
     * @param {String} practice String of the CCG name
     * @returns {HttpPromise} Http A Http object. Uses callback functions to get the data inside the controller
     */

    dataFactory.getCCGObesity = function (practice) {
        return $http.get(urlBase+'/ccg/obesity/'+encodeURIComponent(practice));
    };

    /**
     * @name dataFactory.getCCGCOPD
     * @function getCCGCOPD
     * @description Function  Used to get Data from the API
     * @memberOf WePredict.dataFactory
     * @param {String} practice String of the CCG name
     * @returns {HttpPromise} Http A Http object. Uses callback functions to get the data inside the controller
     */
    dataFactory.getCCGCOPD = function (practice) {
        return $http.get(urlBase+'/ccg/copd/'+encodeURIComponent(practice));
    };

    /**
     * @name dataFactory.getHeatMap
     * @function getHeatMap
     * @description Function  Used to get Data from the API
     * @memberOf WePredict.dataFactory
     * @returns {HttpPromise} Http A Http object. Uses callback functions to get the data inside the controller
     */
    dataFactory.getHeatMap  = function(){
        return $http.get(urlBase+'/ccg/heat_map');
    }


    /**
     * @name dataFactory.getPracticeAsmatha
     * @function getPracticeAsmatha
     * @description Function  Used to get Data from the API
     * @memberOf WePredict.dataFactory
     * @param {String} practice String of the practice name
     * @returns {HttpPromise} Http A Http object. Uses callback functions to get the data inside the controller
     */
    dataFactory.getPracticeAsmatha = function (practice) {
        return $http.get(urlBase+'/practice/asmatha/'+encodeURIComponent(practice));
    };

    /**
     * @name dataFactory.getPracticeCHD
     * @function getPracticeCHD
     * @description Function  Used to get Data from the API
     * @memberOf WePredict.dataFactory
     * @param {String} practice String of the practice name
     * @returns {HttpPromise} Http A Http object. Uses callback functions to get the data inside the controller
     */
    dataFactory.getPracticeCHD = function (practice) {
        return $http.get(urlBase+'/practice/chd/'+encodeURIComponent(practice));
    };

    /**
     * @name dataFactory.getPracticeCOPDAdmin
     * @function getPracticeCOPDAdmin
     * @description Function  Used to get Data from the API
     * @memberOf WePredict.dataFactory
     * @param {String} practice String of the practice name
     * @returns {HttpPromise} Http A Http object. Uses callback functions to get the data inside the controller
     */
    dataFactory.getPracticeCOPDAdmin = function (practice) {
        return $http.get(urlBase+'/practice/COPDAdmissions/'+encodeURIComponent(practice));
    };


    /**
     * @name dataFactory.getPracticeSmoking
     * @function getPracticeSmoking
     * @description Function  Used to get Data from the API
     * @memberOf WePredict.dataFactory
     * @param {String} practice String of the practice name
     * @returns {HttpPromise} Http A Http object. Uses callback functions to get the data inside the controller
     */
    dataFactory.getPracticeSmoking = function (practice) {
        return $http.get(urlBase+'/practice/smoking/'+encodeURIComponent(practice));
    };
    /**
     * @name dataFactory.getPracticeFlu
     * @function getPracticeFlu
     * @description Function  Used to get Data from the API
     * @memberOf WePredict.dataFactory
     * @param {String} practice String of the practice name
     * @returns {HttpPromise} Http A Http object. Uses callback functions to get the data inside the controller
     */
    dataFactory.getPracticeFlu = function (practice) {
        return $http.get(urlBase+'/practice/flu/'+encodeURIComponent(practice));
    };

    /**
     * @name dataFactory.getPracticeObesity
     * @function getPracticeObesity
     * @description Function  Used to get Data from the API
     * @memberOf WePredict.dataFactory
     * @param {String} practice String of the practice name
     * @returns {HttpPromise} Http A Http object. Uses callback functions to get the data inside the controller
     */
    dataFactory.getPracticeObesity = function (practice) {
        return $http.get(urlBase+'/practice/obesity/'+encodeURIComponent(practice));
    };
    /**
     * @name dataFactory.getPracticeCOPD
     * @function getPracticeCOPD
     * @description Function  Used to get Data from the API
     * @memberOf WePredict.dataFactory
     * @param {String} practice String of the practice name
     * @returns {HttpPromise} Http A Http object. Uses callback functions to get the data inside the controller
     */
    dataFactory.getPracticeCOPD = function (practice) {
        return $http.get(urlBase+'/practice/copd/'+encodeURIComponent(practice));
    };

    return dataFactory;


}]);
