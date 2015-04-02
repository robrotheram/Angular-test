/**
 * Created by robert on 02/04/15.
 */
wepredictApp.controller('ccgAsmathaChartController', ['myService','dataFactory','$scope','$location','$timeout', function(myService,dataFactory,$scope,$location,$timeout) {
    var obj = myService.get();
    dataFactory.getCCGAsmatha(obj.dec)
        .success(function (data) {
            $scope.asData  = [
                                (data[0]["2009_ASTHMA"]).toFixed(2),
                                (data[0]["2010_ASTHMA"]).toFixed(2),
                                (data[0]["2011_ASTHMA"]).toFixed(2),
                                (data[0]["2012_ASTHMA"]).toFixed(2)
            ];

                $scope.activeData = {
                labels: [
                    '2009',
                    '2010',
                    '2011',
                    '2012'
                ],
                datasets: [
                    {
                        data: $scope.asData
                    }
                ]
            };

            console.log($scope.asData);
        })
        .error(function (error) {
            $scope.message = 'Unable to load customer data: ' + error.message;
            console.log($scope.message);
        });


    $scope.activeData = {
        labels: [
            'Jan',
            'Feb',
            'Mar'
        ],
        datasets: [
            {
                data: [0, 5, 10, 15, 20, 25]
            }
        ]
    };
}]);

wepredictApp.controller('ccgCOPDChartController', ['myService','dataFactory','$scope','$location','$timeout', function(myService,dataFactory,$scope,$location,$timeout) {
    var obj = myService.get();
    dataFactory.getCCGCOPD(obj.dec)
        .success(function (data) {
            $scope.asData  = [
                (data[0]["2009_COPD_QOF"]).toFixed(2),
                (data[0]["2010_COPD_QOF"]).toFixed(2),
                (data[0]["2011_COPD_QOF"]).toFixed(2),
                (data[0]["2012_COPD_QOF"]).toFixed(2),
                (data[0]["2013_COPD_QOF"]).toFixed(2)
            ];

            $scope.activeData = {
                labels: [
                    '2009',
                    '2010',
                    '2011',
                    '2012',
                    '2013'
                ],
                datasets: [
                    {
                        data: $scope.asData
                    }
                ]
            };

            console.log($scope.asData);
        })
        .error(function (error) {
            $scope.message = 'Unable to load customer data: ' + error.message;
            console.log($scope.message);
        });


    $scope.activeData = {
        labels: [
            'Jan',
            'Feb',
            'Mar'
        ],
        datasets: [
            {
                data: [0, 5, 10, 15, 20, 25]
            }
        ]
    };
}]);

wepredictApp.controller('ccgCHDChartController', ['myService','dataFactory','$scope','$location','$timeout', function(myService,dataFactory,$scope,$location,$timeout) {
    var obj = myService.get();
    dataFactory.getCCGCHD(obj.dec)
        .success(function (data) {
            $scope.asData  = [
                (data[0]["2009_CHD_QOF"]).toFixed(2),
                (data[0]["2010_CHD_QOF"]).toFixed(2),
                (data[0]["2011_CHD_QOF"]).toFixed(2),
                (data[0]["2012_CHD_QOF"]).toFixed(2)
            ];

            $scope.activeData = {
                labels: [
                    '2009',
                    '2010',
                    '2011',
                    '2012'
                ],
                datasets: [
                    {
                        data: $scope.asData
                    }
                ]
            };

            console.log($scope.asData);
        })
        .error(function (error) {
            $scope.message = 'Unable to load customer data: ' + error.message;
            console.log($scope.message);
        });


    $scope.activeData = {
        labels: [
            'Jan',
            'Feb',
            'Mar'
        ],
        datasets: [
            {
                data: [0, 5, 10, 15, 20, 25]
            }
        ]
    };
}]);


wepredictApp.controller('ccgObesityChartController', ['myService','dataFactory','$scope','$location','$timeout', function(myService,dataFactory,$scope,$location,$timeout) {
    var obj = myService.get();
    dataFactory.getCCGObesity(obj.dec)
        .success(function (data) {
            $scope.asData  = [
                (data[0]["2009_Obesity_QOF"]).toFixed(2),
                (data[0]["2010_Obesity_QOF"]).toFixed(2),
                (data[0]["2011_Obesity_QOF"]).toFixed(2),
                (data[0]["2012_Obesity_QOF"]).toFixed(2),
                (data[0]["2013_Obesity_QOF"]).toFixed(2)
            ];

            $scope.activeData = {
                labels: [
                    '2009',
                    '2010',
                    '2011',
                    '2012',
                    '2013'
                ],
                datasets: [
                    {
                        data: $scope.asData
                    }
                ]
            };

            console.log($scope.asData);
        })
        .error(function (error) {
            $scope.message = 'Unable to load customer data: ' + error.message;
            console.log($scope.message);
        });


    $scope.activeData = {
        labels: [
            'Jan',
            'Feb',
            'Mar'
        ],
        datasets: [
            {
                data: [0, 5, 10, 15, 20, 25]
            }
        ]
    };
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




