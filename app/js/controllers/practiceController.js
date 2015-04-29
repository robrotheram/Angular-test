/**
 * @class WePredict.practiceController
 * @description Controller that controllers the Practice view.
 */

wepredictApp.controller('practiceController', ['myService','dataFactory','$scope','$location', function(myService,dataFactory,$scope,$location) {
    var obj = myService.get();
    $scope.practiceName = $location.search().prac;
    $scope.practiceCode = $location.search().pracid;
    $scope.ccgname = $location.search().dec;

    $scope.chartTypes = [
        {"id": "bar", "title": "Bar"},
        {"id": "line", "title": "Line"},
        {"id": "spline", "title": "Smooth line"},
        {"id": "area", "title": "Area"},
        {"id": "areaspline", "title": "Smooth area"},
        {"id": "column", "title": "Column"},
        {"id": "scatter", "title": "Scatter"}
    ];

    $scope.selectedTypes = "bar";

    /**
     * @name $scope.changeChart
     * @function changeChart
     * @memberOf WePredict.practiceController
     * @description  Sets the Chart type in the service to be used throughout the page to change the chart type
     */
    $scope.changeChart = function() {
        myService.setChartType($scope.selectedTypes);
    }


    $scope.practiceSelected = {}

    dataFactory.getPracticeList($location.search().dec)
        .success(function (data) {
            $scope.practice = data;
            $scope.practiceSelected = $scope.practice[0];
        })
        .error(function (error) {
            $scope.message = 'Unable to load customer data: ' + error.message;
        });



    /**
     * @name $scope.update
     * @function update
     * @memberOf WePredict.ccgController
     * @description  Put Data into Service and go to Practice page
     *
     */
    $scope.update = function() {
        $location.path('practice').search({prac: $scope.practiceSelected.Practice_Name, dec: $scope.ccgname ,pracid: $scope.practiceSelected.Practice_Code});

    }

}]);

/**
 * @class WePredict.PracticeAsmathaChartController
 * @description Controller that controllers the Asthma chart.
 */

wepredictApp.controller('PracticeAsmathaChartController', ['myService','dataFactory','$scope','$location','$timeout', function(myService,dataFactory,$scope,$location,$timeout) {
    var obj = myService.get();

    $scope.$watch(function () { return myService.getChartType(); }, function (newValue, oldValue) {
        if (newValue !== oldValue)  $scope.chartConfig.options.chart.type = newValue;
    });



    $scope.chartConfig = {
        options: {
            chart: {  type: 'column' },
            tooltip: { style: { padding: 10,fontWeight: 'bold'}
            }
        },
        title: { text: 'Asthma QOF prevalence'},
        loading: true,
        series:[],
        useHighStocks: false
    };

    /**
     * @name dataFactory.getPracticeAsmatha
     * @function getPracticeAsmatha
     * @memberOf WePredict.PracticeAsmathaChartController
     * @description  Builds the chart from data gotten from the api Converts all numeric data to floats
     */
    dataFactory.getPracticeAsmatha($location.search().pracid)
        .success(function (data) {
            var l_Dara = [
                parseFloat((data[0]["2009_ASTHMA"]).toFixed(2)),
                parseFloat((data[0]["2010_ASTHMA"]).toFixed(2)),
                parseFloat((data[0]["2011_ASTHMA"]).toFixed(2)),
                parseFloat((data[0]["2012_ASTHMA"]).toFixed(2))
            ];

            var c = (Math.round(Math.max.apply(Math,l_Dara)))-2;

            console.log("ObesityData ="+ $location.search().dec);

            $scope.chartConfig.series.push({
                name:$location.search().dec,
                data: l_Dara,
                index:1
            });
            $scope.chartConfig.xAxis={
                title: {text: 'Year'},
                categories: ["2009","2010","2011","2012"]
            };
            $scope.chartConfig.yAxis= {
                title: {text: '% Proportion'},
                currentMin:0
            };
            $scope.chartConfig.loading= false;
        })
        .error(function (error) {
            $scope.message = 'Unable to load customer data: ' + error.message;
            console.log($scope.message);
        });

    dataFactory.getCCGAsmatha($location.search().dec)
        .success(function (data) {
            var l_Dara = [
                parseFloat((data[0]["2009_ASTHMA"]).toFixed(2)),
                parseFloat((data[0]["2010_ASTHMA"]).toFixed(2)),
                parseFloat((data[0]["2011_ASTHMA"]).toFixed(2)),
                parseFloat((data[0]["2012_ASTHMA"]).toFixed(2))
            ];
            $scope.chartConfig.series.push({
                name:$location.search().dec+' Average',
                data: l_Dara,
                index:0
            });

        })
        .error(function (error) {
            $scope.message = 'Unable to load customer data: ' + error.message;
            console.log($scope.message);
        });

}]);

/**
 * @class WePredict.PracticeCOPDChartController
 * @description Controller that controllers the COPD Chart.
 */


wepredictApp.controller('PracticeCOPDChartController', ['myService','dataFactory','$scope','$location','$timeout', function(myService,dataFactory,$scope,$location,$timeout) {
    var obj = myService.get();

    $scope.$watch(function () { return myService.getChartType(); }, function (newValue, oldValue) {
        if (newValue !== oldValue)  $scope.chartConfig.options.chart.type = newValue;
    });


    $scope.chartConfig = {
        options: {
            chart: {  type: 'column' },
            tooltip: { style: { padding: 10,fontWeight: 'bold'}
            }
        },
        title: { text: 'COPD QOF prevalence'},
        loading: true,
        series:[],
        useHighStocks: false
    };

    dataFactory.getPracticeCOPD($location.search().pracid)
        .success(function (data) {
            var l_Dara = [
                parseFloat((data[0]["2009_COPD_QOF"]).toFixed(2)),
                parseFloat((data[0]["2010_COPD_QOF"]).toFixed(2)),
                parseFloat((data[0]["2011_COPD_QOF"]).toFixed(2)),
                parseFloat((data[0]["2012_COPD_QOF"]).toFixed(2)),
                parseFloat((data[0]["2013_COPD_QOF"]).toFixed(2))
            ];

            var c = (Math.round(Math.max.apply(Math,l_Dara)))-2;

            console.log("ObesityData ="+ c);

            $scope.chartConfig.series.push({
                name:$location.search().dec,
                data: l_Dara
            });
            $scope.chartConfig.xAxis={
                title: {text: 'Year'},
                categories: ["2009","2010","2011","2012","2013"]
            };
            $scope.chartConfig.yAxis= {
                title: {text: '% Proportion'},
                currentMin:0
            };
            $scope.chartConfig.loading= false;
        })
        .error(function (error) {
            $scope.message = 'Unable to load customer data: ' + error.message;
            console.log($scope.message);
        });

    dataFactory.getCCGCOPD($location.search().dec)
        .success(function (data) {
            var l_Dara = [
                parseFloat((data[0]["2009_COPD_QOF"]).toFixed(2)),
                parseFloat((data[0]["2010_COPD_QOF"]).toFixed(2)),
                parseFloat((data[0]["2011_COPD_QOF"]).toFixed(2)),
                parseFloat((data[0]["2012_COPD_QOF"]).toFixed(2)),
                parseFloat((data[0]["2013_COPD_QOF"]).toFixed(2))
            ];
            $scope.chartConfig.series.push({
                name:$location.search().dec+' Average',
                data: l_Dara
            });

        })
        .error(function (error) {
            $scope.message = 'Unable to load customer data: ' + error.message;
            console.log($scope.message);
        });

}]);


/**
 * @class WePredict.PracticeCHDChartController
 * @description Controller that controllers the CHD Chart.
 */



wepredictApp.controller('PracticeCHDChartController', ['myService','dataFactory','$scope','$location','$timeout', function(myService,dataFactory,$scope,$location,$timeout) {
    var obj = myService.get();

    $scope.$watch(function () { return myService.getChartType(); }, function (newValue, oldValue) {
        if (newValue !== oldValue)  $scope.chartConfig.options.chart.type = newValue;
    });


    $scope.chartConfig = {
        options: {
            chart: {  type: 'column' },
            tooltip: { style: { padding: 10,fontWeight: 'bold'}
            }
        },
        title: { text: 'CHD QOF prevalence'},
        loading: true,
        series:[],
        useHighStocks: false
    };

    dataFactory.getPracticeCHD($location.search().pracid)
        .success(function (data) {
            var l_Dara = [
                parseFloat((data[0]["2009_CHD_QOF"]).toFixed(2)),
                parseFloat((data[0]["2010_CHD_QOF"]).toFixed(2)),
                parseFloat((data[0]["2011_CHD_QOF"]).toFixed(2)),
                parseFloat((data[0]["2012_CHD_QOF"]).toFixed(2))
            ];

            var c = (Math.round(Math.max.apply(Math,l_Dara)))-2;

            console.log("ObesityData ="+ c);

            $scope.chartConfig.series.push({
                name:$location.search().dec,
                data: l_Dara
            });
            $scope.chartConfig.xAxis={
                title: {text: 'Year'},
                categories: ["2009","2010","2011","2012"]
            };
            $scope.chartConfig.yAxis= {
                title: {text: '% Proportion'},
                currentMin:0
            };
            $scope.chartConfig.loading= false;
        })
        .error(function (error) {
            $scope.message = 'Unable to load customer data: ' + error.message;
            console.log($scope.message);
        });

    dataFactory.getCCGCHD($location.search().dec)
        .success(function (data) {
            var l_Dara = [
                parseFloat((data[0]["2009_CHD_QOF"]).toFixed(2)),
                parseFloat((data[0]["2010_CHD_QOF"]).toFixed(2)),
                parseFloat((data[0]["2011_CHD_QOF"]).toFixed(2)),
                parseFloat((data[0]["2012_CHD_QOF"]).toFixed(2))
            ];
            $scope.chartConfig.series.push({
                name:$location.search().dec+' Average',
                data: l_Dara
            });

        })
        .error(function (error) {
            $scope.message = 'Unable to load customer data: ' + error.message;
            console.log($scope.message);
        });

}]);


/**
 * @class WePredict.PracticeObesityChartController
 * @description Controller that controllers the Obesity Chart
 */




wepredictApp.controller('PracticeObesityChartController', ['myService','dataFactory','$scope','$location','$timeout', function(myService,dataFactory,$scope,$location,$timeout) {
    var obj = myService.get();

    $scope.$watch(function () { return myService.getChartType(); }, function (newValue, oldValue) {
        if (newValue !== oldValue)  $scope.chartConfig.options.chart.type = newValue;
    });


    $scope.chartConfig = {
        options: {
            chart: {  type: 'column' },
            tooltip: { style: { padding: 10,fontWeight: 'bold'}
            }
        },
        title: { text: 'Obesity QOF prevalence'},
        loading: true,
        series:[],
        useHighStocks: false
    };

    dataFactory.getPracticeObesity($location.search().pracid)
        .success(function (data) {
           var l_Dara = [
                parseFloat((data[0]["2009_Obesity_QOF"]).toFixed(2)),
                parseFloat((data[0]["2010_Obesity_QOF"]).toFixed(2)),
                parseFloat((data[0]["2011_Obesity_QOF"]).toFixed(2)),
                parseFloat((data[0]["2012_Obesity_QOF"]).toFixed(2)),
                parseFloat((data[0]["2013_Obesity_QOF"]).toFixed(2))
            ];

            var c = (Math.round(Math.max.apply(Math,l_Dara)))-2;

            console.log("ObesityData ="+ c);

            $scope.chartConfig.series.push({
                name:$location.search().dec,
                data: l_Dara
            });
            $scope.chartConfig.xAxis={
                title: {text: 'Year'},
                categories: ["2009","2010","2011","2012","2013"]
            };
            $scope.chartConfig.yAxis= {
                title: {text: '% Proportion'},
                currentMin:0
            };
            $scope.chartConfig.loading= false;
        })
        .error(function (error) {
            $scope.message = 'Unable to load customer data: ' + error.message;
            console.log($scope.message);
        });


    dataFactory.getCCGObesity($location.search().dec)
        .success(function (data) {
            var l_Dara = [
                parseFloat((data[0]["2009_Obesity_QOF"]).toFixed(2)),
                parseFloat((data[0]["2010_Obesity_QOF"]).toFixed(2)),
                parseFloat((data[0]["2011_Obesity_QOF"]).toFixed(2)),
                parseFloat((data[0]["2012_Obesity_QOF"]).toFixed(2)),
                parseFloat((data[0]["2013_Obesity_QOF"]).toFixed(2))
            ];
            $scope.chartConfig.series.push({
                name:$location.search().dec+' Average',
                data: l_Dara
            });

        })
        .error(function (error) {
            $scope.message = 'Unable to load customer data: ' + error.message;
            console.log($scope.message);
        });



}]);

/**
 * @class WePredict.PracticeFluChartController
 * @description Controller that controllers the Flu Chart
 */


wepredictApp.controller('PracticeFluChartController', ['myService','dataFactory','$scope','$location','$timeout', function(myService,dataFactory,$scope,$location,$timeout) {
    var obj = myService.get();

    $scope.$watch(function () { return myService.getChartType(); }, function (newValue, oldValue) {
        if (newValue !== oldValue)  $scope.chartConfig.options.chart.type = newValue;
    });



    $scope.chartConfig = {
        options: {
            chart: {  type: 'column' },
            tooltip: { style: { padding: 10,fontWeight: 'bold'}
            }
        },
        title: { text: 'Uptake of Seasonal Flu Vaccine '},
        loading: true,
        series:[],
        useHighStocks: false
    };

    dataFactory.getPracticeFlu($location.search().pracid)
        .success(function (data) {
            var dataArr = [parseInt((data[0]["2010_flu06"]).toFixed(2)),parseInt((data[0]["2010_flu65"]).toFixed(2))];

            $scope.chartConfig.series.push({
                name:$location.search().dec,
                data: dataArr
            });
            $scope.chartConfig.xAxis={

                categories: ['Flu vaccine 6 month+', 'Flu vaccine 65+']
            };
            $scope.chartConfig.loading= false;

            console.log(dataArr);
        })
        .error(function (error) {
            $scope.message = 'Unable to load customer data: ' + error.message;
            console.log($scope.message);
        });

    dataFactory.getCCGFlu($location.search().dec)
        .success(function (data) {
            var l_Dara = [
                parseFloat((data[0]["2010_flu06"]).toFixed(2)),
                parseFloat((data[0]["2010_flu65"]).toFixed(2)),
            ];
            $scope.chartConfig.series.push({
                name:$location.search().dec+' Average',
                data: l_Dara,
                index:0
            });

        })
        .error(function (error) {
            $scope.message = 'Unable to load customer data: ' + error.message;
            console.log($scope.message);
        });

}]);







