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
    dataFactory.getPracticeAsmatha(obj.pracid)
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

wepredictApp.controller('PracticeCOPDChartController', ['myService','dataFactory','$scope','$location','$timeout', function(myService,dataFactory,$scope,$location,$timeout) {
    var obj = myService.get();
    dataFactory.getPracticeCOPD(obj.pracid)
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

wepredictApp.controller('PracticeCHDChartController', ['myService','dataFactory','$scope','$location','$timeout', function(myService,dataFactory,$scope,$location,$timeout) {
    var obj = myService.get();
    dataFactory.getPracticeCHD(obj.pracid)
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


wepredictApp.controller('PracticeObesityChartController', ['myService','dataFactory','$scope','$location','$timeout', function(myService,dataFactory,$scope,$location,$timeout) {
    var obj = myService.get();
    dataFactory.getPracticeObesity(obj.pracid)
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


wepredictApp.controller('PracticeFluChartController', ['myService','dataFactory','$scope','$location','$timeout', function(myService,dataFactory,$scope,$location,$timeout) {
    var obj = myService.get();
    dataFactory.getPracticeFlu(obj.pracid)
        .success(function (data) {
            $scope.asData  = [
                (data[0]["2010_flu06"]).toFixed(2),
                (data[0]["2010_flu65"]).toFixed(2),
            ];

            $scope.activeData = {
                labels: [
                    'Flu vaccine 6 month+',
                    'Flu vaccine 65+'
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





wepredictApp.controller('PracticeCordDiagramController', ['myService','dataFactory','$scope','$location','$timeout', function(myService,dataFactory,$scope,$location,$timeout) {
    var obj = myService.get();
    $scope.ccgdata = [
        [11975,  5871, 8916, 2868],
        [ 1951, 10048, 2060, 6171],
        [ 8010, 16145, 8090, 8045],
        [ 1013,   990,  940, 6907]
    ];
}]);







