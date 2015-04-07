/**
 * Created by robert on 12/03/15.
 */

// create the controller and inject Angular's $scope
wepredictApp.controller('mainController',['myService','$scope','$route', '$window', '$location','dataFactory','$timeout',
    function(myService,$scope,$route, $window, $location,dataFactory,$timeout) {

        $(".btn-group > .btn").click(function(){
            $(this).addClass("active").siblings().removeClass("active");
        });

        var _2009 = {CHD:[],COPD:[],Asma:[],Obesity:[]};
        var _2010 = {CHD:[],COPD:[],Asma:[],Obesity:[]};
        var _2011 = {CHD:[],COPD:[],Asma:[],Obesity:[]};
        var _2012 = {CHD:[],COPD:[],Asma:[],Obesity:[]};


        var selectedYear;
        var selectedData;
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


        $scope._2009Update = function() {
            selectedYear = _2009;
            $scope.ccgheatmapdata = selectedYear[selectedData];
        };
        $scope._2010Update = function() {
            selectedYear = _2010;
            $scope.ccgheatmapdata = selectedYear[selectedData];
        };
        $scope._2011Update = function() {
            selectedYear = _2011;
            $scope.ccgheatmapdata = selectedYear[selectedData];
        };
        $scope._2012Update = function() {
            selectedYear = _2012;
            $scope.ccgheatmapdata = selectedYear[selectedData];
        };

        $scope.COPDUpdate = function() {
            selectedData = "COPD";
            $scope.ccgheatmapdata = selectedYear[selectedData];
            $scope.keyname = "COPD Key"
        };
        $scope.AsmaUpdate = function() {
            selectedData = "Asma";
            $scope.ccgheatmapdata = selectedYear[selectedData];
            $scope.keyname = "Asthma Key"
        };
        $scope.CHDUpdate = function() {
            selectedData = "CHD";
            $scope.ccgheatmapdata = selectedYear[selectedData];
            $scope.keyname = "CHD Key"
        };
        $scope.ObesityUpdate = function() {
            selectedData = "Obesity";
            $scope.ccgheatmapdata = selectedYear[selectedData];
            $scope.keyname = "Obesity Key"
        };



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
                    _2009["CHD"][i] = {"id":data[i]["CCG_Name"],"value":data[i]["2009_CHD_QOF"]}
                    _2009["COPD"][i] = {"id":data[i]["CCG_Name"],"value":data[i]["2009_COPD"]}
                    _2009["Asma"][i] = {"id":data[i]["CCG_Name"],"value":data[i]["2009_ASTHMA"]}
                    _2009["Obesity"][i] = {"id":data[i]["CCG_Name"],"value":data[i]["2009_Obesity_QOF"]}

                    _2010["CHD"][i] = {"id":data[i]["CCG_Name"],"value":data[i]["2010_CHD_QOF"]}
                    _2010["COPD"][i] = {"id":data[i]["CCG_Name"],"value":data[i]["2010_COPD"]}
                    _2010["Asma"][i] = {"id":data[i]["CCG_Name"],"value":data[i]["2010_ASTHMA"]}
                    _2010["Obesity"][i] = {"id":data[i]["CCG_Name"],"value":data[i]["2010_Obesity_QOF"]}


                    _2011["CHD"][i] = {"id":data[i]["CCG_Name"],"value":data[i]["2011_CHD_QOF"]}
                    _2011["COPD"][i] = {"id":data[i]["CCG_Name"],"value":data[i]["2011_COPD"]}
                    _2011["Asma"][i] = {"id":data[i]["CCG_Name"],"value":data[i]["2011_ASTHMA"]}
                    _2011["Obesity"][i] = {"id":data[i]["CCG_Name"],"value":data[i]["2011_Obesity_QOF"]}

                    _2012["CHD"][i] = {"id":data[i]["CCG_Name"],"value":data[i]["2012_CHD_QOF"]}
                    _2012["COPD"][i] = {"id":data[i]["CCG_Name"],"value":data[i]["2012_COPD"]}
                    _2012["Asma"][i] = {"id":data[i]["CCG_Name"],"value":data[i]["2012_ASTHMA"]}
                    _2012["Obesity"][i] = {"id":data[i]["CCG_Name"],"value":data[i]["2012_Obesity_QOF"]}



                }
                selectedYear = _2009;
                selectedData = "COPD";
                $scope.ccgheatmapdata = selectedYear[selectedData];
                $scope.keyname = "COPD Key"


            })
            .error(function (error) {
                $scope.message = 'Unable to load customer data: ' + error.message;
            });
    }]);