var wepredictApp = angular.module('scotchApp', ['ngRoute','nouislider','highcharts-ng']);

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




// configure our routes
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
            //controller  : 'ccgController'
        })
        .when('/practice', {
            templateUrl : 'views/practice.html',
            controller  : 'practiceController'
        });
});












