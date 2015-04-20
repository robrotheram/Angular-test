/**
 * Created by robert on 02/04/15.
 */
wepredictApp.controller('ccgAsmathaChartController', ['myService','dataFactory','$scope','$location','$timeout', function(myService,dataFactory,$scope,$location,$timeout) {
    var obj = myService.get();

    $scope.chartConfig = {

        options: {
            chart: {
                type: 'areaspline'
            },
            tooltip: {
                style: {
                    padding: 10,
                    fontWeight: 'bold'
                }
            }
        },
        title: { text: 'Asthma QOF prevalence'},
        loading: true,
        useHighStocks: false
    };

    dataFactory.getCCGAsmatha(obj.dec)
        .success(function (data) {
            var l_Dara = [
                parseFloat((data[0]["2009_ASTHMA"]).toFixed(2)),
                parseFloat((data[0]["2010_ASTHMA"]).toFixed(2)),
                parseFloat((data[0]["2011_ASTHMA"]).toFixed(2)),
                parseFloat((data[0]["2012_ASTHMA"]).toFixed(2))
            ];

            var c = (Math.round(Math.max.apply(Math,l_Dara)))-2;

            console.log("ObesityData ="+ obj.dec);

            $scope.chartConfig.series = [{
                name:obj.dec,
                data: l_Dara
            }];
            $scope.chartConfig.xAxis={
                title: {text: 'Year'},
                categories: ["2009","2010","2011","2012"]
            };
            $scope.chartConfig.yAxis= {
                title: {text: 'Indicator Value'},
                currentMin:0
            };
            $scope.chartConfig.loading= false;
        })
        .error(function (error) {
            $scope.message = 'Unable to load customer data: ' + error.message;
            console.log($scope.message);
        });

}]);

wepredictApp.controller('ccgCOPDChartController', ['myService','dataFactory','$scope','$location','$timeout', function(myService,dataFactory,$scope,$location,$timeout) {
    var obj = myService.get();

    $scope.chartConfig = {

        options: {
            chart: {
                type: 'column'
            },
            tooltip: {
                style: {
                    padding: 10,
                    fontWeight: 'bold'
                }
            }
        },
        title: { text: 'COPD QOF prevalence'},
        loading: true,
        useHighStocks: false
    };


    dataFactory.getCCGCOPD(obj.dec)
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

            $scope.chartConfig.series = [{
                name:obj.dec,
                data: l_Dara
            }];
            $scope.chartConfig.xAxis={
                title: {text: 'Year'},
                categories: ["2009","2010","2011","2012","2013"]
            };
            $scope.chartConfig.yAxis= {
                title: {text: 'Indicator Value'},
                currentMin:0
            };
            $scope.chartConfig.loading= false;
        })
        .error(function (error) {
            $scope.message = 'Unable to load customer data: ' + error.message;
            console.log($scope.message);
        });


}]);

wepredictApp.controller('ccgCHDChartController', ['myService','dataFactory','$scope','$location','$timeout', function(myService,dataFactory,$scope,$location,$timeout) {
    var obj = myService.get();

    $scope.chartConfig = {
        options: {
            chart: {  type: 'areaspline' },
            tooltip: { style: { padding: 10,fontWeight: 'bold'}
            }
        },
        title: { text: 'CHD QOF prevalence'},
        loading: true,
        useHighStocks: false
    };

    dataFactory.getCCGCHD(obj.dec)
        .success(function (data) {
            var l_Dara = [
                parseFloat((data[0]["2009_CHD_QOF"]).toFixed(2)),
                parseFloat((data[0]["2010_CHD_QOF"]).toFixed(2)),
                parseFloat((data[0]["2011_CHD_QOF"]).toFixed(2)),
                parseFloat((data[0]["2012_CHD_QOF"]).toFixed(2))
            ];

            var c = (Math.round(Math.max.apply(Math,l_Dara)))-2;

            console.log("ObesityData ="+ c);

            $scope.chartConfig.series = [{
                name:obj.dec,
                data: l_Dara
            }];
            $scope.chartConfig.xAxis={
                title: {text: 'Year'},
                categories: ["2009","2010","2011","2012"]
            };
            $scope.chartConfig.yAxis= {
                title: {text: 'Indicator Value'},
                currentMin:0
            };
            $scope.chartConfig.loading= false;
        })
        .error(function (error) {
            $scope.message = 'Unable to load customer data: ' + error.message;
            console.log($scope.message);
        });

}]);


wepredictApp.controller('ccgObesityChartController', ['myService','dataFactory','$scope','$location','$timeout', function(myService,dataFactory,$scope,$location,$timeout) {
    var obj = myService.get();


    $scope.chartConfig = {

        options: {
            chart: {
                type: 'areaspline'
            },
            tooltip: {
                style: {
                    padding: 10,
                    fontWeight: 'bold'
                }
            }
        },
        title: { text: 'Obesity QOF prevalence'},
        loading: true,
        useHighStocks: false
    };



    dataFactory.getCCGObesity(obj.dec)
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

            $scope.chartConfig.series = [{
                name:obj.dec,
                data: l_Dara
            }];
            $scope.chartConfig.xAxis={
                title: {text: 'Year'},
                categories: ["2009","2010","2011","2012","2013"]
            };
            $scope.chartConfig.yAxis= {
                title: {text: 'Indicator Value'},
                currentMin:0
            };
            $scope.chartConfig.loading= false;

        })
        .error(function (error) {
            $scope.message = 'Unable to load customer data: ' + error.message;
            console.log($scope.message);
        });

}]);


wepredictApp.controller('ccgFluChartController', ['myService','dataFactory','$scope','$location','$timeout', function(myService,dataFactory,$scope,$location,$timeout) {
    var obj = myService.get();

    $scope.chartConfig = {

        options: {
            chart: {
                type: 'column'
            },
            tooltip: {
                style: {
                    padding: 10,
                    fontWeight: 'bold'
                }
            }
        },
        title: { text: 'Uptake of Seasonal Flu Vaccine '},
        loading: true,
        yAxis: {
            title: {text: 'Indicator Value'}
        },
        useHighStocks: false
    };


    dataFactory.getCCGFlu(obj.dec)
        .success(function (data) {

            $scope.chartConfig.series = [];
                $.each(data, function(key1, item) {
                    console.log(item);
                    var dataArr = [parseFloat(item['2010_flu06']),parseFloat(item['2010_flu06'])];
                    var obj = { name:item["Practice_Name"],  data: dataArr }
                    $scope.chartConfig.series.push(obj);

                });
            $scope.chartConfig.xAxis={

                categories: ['Flu vaccine 6 month+', 'Flu vaccine 65+']
            };

            $scope.chartConfig.loading= false;
        })
        .error(function (error) {
            $scope.message = 'Unable to load customer data: ' + error.message;
            console.log($scope.message);
        });






}]);





wepredictApp.controller('customChartController', ['myService','dataFactory','$scope','$location','$timeout', function(myService,dataFactory,$scope,$location,$timeout) {

    var obj = myService.get();


    $scope.chartConfig = {

        options: {
            chart: {
                type: 'spline'
            },
            tooltip: {
                style: {
                    padding: 10,
                    fontWeight: 'bold'
                }
            },
            legend: {
                align: 'right',
                enabled: true,
                verticalAlign: 'top',
                layout: "vertical",
                title: {
                    text: 'Practice',
                    style: {fontWeight: 'bold'}
                },
                borderWidth: 1

            }
        },
        title: { text: 'Obesity QOF prevalence'},
        loading: true,
        useHighStocks: false
    };



    var masterData;

    dataFactory.getCCGData(obj.dec)
        .success(function (data) {
            masterData = data;

            $scope.chartConfig.series = [];

            $.each(masterData, function(key1, item) {

                var l_Dara = [
                    parseFloat(item["2009_Obesity_QOF"]),
                    parseFloat(item["2010_Obesity_QOF"]),
                    parseFloat(item["2011_Obesity_QOF"]),
                    parseFloat(item["2012_Obesity_QOF"]),
                    parseFloat(item["2013_Obesity_QOF"])
                ];
                var obj = { name:item["Practice_Name"],  data: l_Dara };
                $scope.chartConfig.series.push(obj);
            });
            $scope.chartConfig.xAxis={
                title: {text: 'Year'},
                categories: ["2009","2010","2011","2012","2013"]
            };
            $scope.chartConfig.yAxis= {
                title: {text: 'Indicator Value'},
                currentMin:0
            };
            $scope.chartConfig.loading= false;

        })
        .error(function (error) {
            $scope.message = 'Unable to load customer data: ' + error.message;
            console.log($scope.message);
        });


    $scope.hideall = function() {
        $scope.chartConfig.serie
        $($scope.chartConfig.series).each(function(){
            console.log(this);
            this.visible = false;
        });
        $scope.chartConfig.series[0].visible = true;
    }


    $scope.fludata = function() {
        $scope.chartConfig.series = [];
        $.each(masterData, function(key1, item) {

            var dataArr = [parseFloat(item['2010_flu06']),parseFloat(item['2010_flu06'])];
            var obj = { name:item["Practice_Name"],  data: dataArr }
            $scope.chartConfig.series.push(obj);

        });
        $scope.chartConfig.xAxis={

            categories: ['Flu vaccine 6 month+', 'Flu vaccine 65+']
        };
        $scope.chartConfig.options.chart.type = 'bar';

    };

    $scope.chartTypes = [
        {"id": "line", "title": "Line"},
        {"id": "spline", "title": "Smooth line"},
        {"id": "area", "title": "Area"},
        {"id": "areaspline", "title": "Smooth area"},
        {"id": "column", "title": "Column"},
        {"id": "bar", "title": "Bar"},
        {"id": "pie", "title": "Pie"},
        {"id": "scatter", "title": "Scatter"}
    ];


}]);


wepredictApp.controller('cordDiagramController', ['myService','dataFactory','$scope','$location','$timeout', function(myService,dataFactory,$scope,$location,$timeout) {
    var obj = myService.get();
    $scope.ccgdata = [
        [11975,  5871, 8916, 2868],
        [ 1951, 10048, 2060, 6171],
        [ 8010, 16145, 8090, 8045],
        [ 1013,   990,  940, 6907]
    ];
}]);




