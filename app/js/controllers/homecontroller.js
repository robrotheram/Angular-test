/**
 * Created by robert on 12/03/15.
 */

// create the controller and inject Angular's $scope
wepredictApp.controller('mainController',['myService','$scope','$route', '$window', '$location','dataFactory','$timeout',
    function(myService,$scope,$route, $window, $location,dataFactory,$timeout) {


        var flu =[];
        var COPD =[];
        var Asma =[];

        $scope.ccgheatmapdata = [1];

        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };
        $scope.message = 'Everyone come and see how good I look!';
        $scope.alert = function(id,desc){
            $timeout(function() {
                var obj = {name:id,dec:desc};
                myService.set(obj);
                console.log(id+" | "+desc);
                $location.path('ccg');
                $scope = $scope || angular.element(document).scope();
                $scope.$apply();
            });
        };


        $scope.keyname = "Key"
        $scope.COPDUpdate = function() {
            $scope.ccgheatmapdata = COPD;
            $scope.keyname = "COPD Key"
        }
        $scope.AsmaUpdate = function() {
            $scope.ccgheatmapdata = Asma;
            $scope.keyname = "Asthma Key"
        }
        $scope.fluUpdate = function() {
            $scope.ccgheatmapdata = flu;
            $scope.keyname = "Flu Key"
        }

        $scope.ccgSelected = {};
        $scope.update = function() {

            $timeout(function() {
                var obj = {dec: $scope.ccgSelected.CCG_Name};
                myService.set(obj);
                $location.path('ccg');
                $scope = $scope || angular.element(document).scope();
                $scope.$apply();
            });
        };

        dataFactory.getCCG()
            .success(function (data) {
                $scope.ccg = data;
                $scope.ccgSelected = $scope.ccg[1];
            })
            .error(function (error) {
                $scope.message = 'Unable to load customer data: ' + error.message;
            });


        dataFactory.getHeatMap()
            .success(function(data) {
                for (var i=data.length-1; i>=0; i--) {
                    flu[i] = {"id":data[i]["CCG_Name"],"value":data[i]["2010_FLU06"]}
                    COPD[i] = {"id":data[i]["CCG_Name"],"value":data[i]["2012_COPD"]}
                    Asma[i] = {"id":data[i]["CCG_Name"],"value":data[i]["2012_ASTHMA"]}
                }
                $scope.ccgheatmapdata = flu;
                $scope.keyname = "Flu Key"


            })
            .error(function (error) {
                $scope.message = 'Unable to load customer data: ' + error.message;
            });
    }]);