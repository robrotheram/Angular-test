wepredictApp.controller('practiceController', ['myService','dataFactory','$scope', function(myService,dataFactory,$scope) {
    var obj = myService.get();
    $scope.practiceName = obj.prac;
    $scope.practiceCode = obj.pracid;
    $scope.ccgname = obj.dec;
}]);

/**
 * Created by robert on 02/04/15.
 */
wepredictApp.controller('PracticeAsmathaChartController', ['myService','dataFactory','$scope','$location','$timeout', function(myService,dataFactory,$scope,$location,$timeout) {
    var obj = myService.get();
    $scope.chartConfig = {
        options: {
            chart: {  type: 'areaspline' },
            tooltip: { style: { padding: 10,fontWeight: 'bold'}
            }
        },
        title: { text: 'Asthma QOF prevalence'},
        loading: true,
        useHighStocks: false
    };

    dataFactory.getPracticeAsmatha(obj.pracid)
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

wepredictApp.controller('PracticeCOPDChartController', ['myService','dataFactory','$scope','$location','$timeout', function(myService,dataFactory,$scope,$location,$timeout) {
    var obj = myService.get();
    $scope.chartConfig = {
        options: {
            chart: {  type: 'column' },
            tooltip: { style: { padding: 10,fontWeight: 'bold'}
            }
        },
        title: { text: 'COPD QOF prevalence'},
        loading: true,
        useHighStocks: false
    };

    dataFactory.getPracticeCOPD(obj.pracid)
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

wepredictApp.controller('PracticeCHDChartController', ['myService','dataFactory','$scope','$location','$timeout', function(myService,dataFactory,$scope,$location,$timeout) {
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

    dataFactory.getPracticeCHD(obj.pracid)
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


wepredictApp.controller('PracticeObesityChartController', ['myService','dataFactory','$scope','$location','$timeout', function(myService,dataFactory,$scope,$location,$timeout) {
    var obj = myService.get();
    $scope.chartConfig = {
        options: {
            chart: {  type: 'areaspline' },
            tooltip: { style: { padding: 10,fontWeight: 'bold'}
            }
        },
        title: { text: 'Obesity QOF prevalence'},
        loading: true,
        useHighStocks: false
    };

    dataFactory.getPracticeObesity(obj.pracid)
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


wepredictApp.controller('PracticeFluChartController', ['myService','dataFactory','$scope','$location','$timeout', function(myService,dataFactory,$scope,$location,$timeout) {
    var obj = myService.get();

    $scope.chartConfig = {
        options: {
            chart: {  type: 'column' },
            tooltip: { style: { padding: 10,fontWeight: 'bold'}
            }
        },
        title: { text: 'Uptake of Seasonal Flu Vaccine '},
        loading: true,
        useHighStocks: false
    };

    dataFactory.getPracticeFlu(obj.pracid)
        .success(function (data) {
            var dataArr = [parseInt((data[0]["2010_flu06"]).toFixed(2)),parseInt((data[0]["2010_flu65"]).toFixed(2))];

            $scope.chartConfig.series = [{
                name:obj.dec,
                data: dataArr
            }];
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
}]);





wepredictApp.controller('PracticeCordDiagramController', ['myService','dataFactory','$scope','$location','$timeout', function(myService,dataFactory,$scope,$location,$timeout) {
    var obj = myService.get();
    $scope.ccgdata = [
        [11975,  5871, 8916, 2868],
        [ 1951, 10048, 2060, 6171],
        [ 8010, 16145, 8090, 8045],
        [ 1013,   990,  940, 6907]
    ];
}]);







