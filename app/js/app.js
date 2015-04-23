
/**
 * @class WePredict.app
 * @memberOf WePredict
 */
var wepredictApp = angular.module('scotchApp', ['ngRoute','nouislider','highcharts-ng']);


/**
 * @function myService
 * @memberOf WePredict.app
 * @description This is an angularjs service.
 */

wepredictApp.factory('myService', function() {
    var savedData = {}
    var data = {
        type:''
    };

    function set(data) {
        savedData = data;
    }
    function get() {
        return savedData;
    }
    return {
        set: set,
        get: get,
        getChartType: function () {
            return data.type;
        },
        setChartType: function (type) {
            data.type = type;
        }
    }
});



/**
 * @function config
 * @memberOf WePredict.app
 * @description This is an config for angular. It describes the views being used and the controller for the view.
 */
wepredictApp.config(function($routeProvider,$locationProvider) {

    $routeProvider
        // route for the home page
        .when('/', {
            templateUrl : 'views/home.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'views/about.html',
            controller  : 'aboutController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : 'views/contact.html',
            controller  : 'contactController'
        })
        // route for the contact page
        .when('/ccg', {
            templateUrl : 'views/ccgName.html'
        })
        .when('/practice', {
            templateUrl : 'views/practice.html',
            controller  : 'practiceController'
        });
});












