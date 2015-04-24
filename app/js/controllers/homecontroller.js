/**
 * @class WePredict.mainController
 * @description Controller that controllers the Home view.
 */

wepredictApp.controller('mainController',['myService','$scope','$route', '$window', '$location','dataFactory','$timeout',
    function(myService,$scope,$route, $window, $location,dataFactory,$timeout) {




        var _2009 = {CHD:[],COPD:[],Asma:[],Obesity:[]};
        var _2010 = {CHD:[],COPD:[],Asma:[],Obesity:[]};
        var _2011 = {CHD:[],COPD:[],Asma:[],Obesity:[]};
        var _2012 = {CHD:[],COPD:[],Asma:[],Obesity:[]};


        var selectedYear;
        var selectedData;
        var timeout;

        $scope.ccgheatmapdata = [1];

        /**
         * @name $scope.onClick
         * @function onClick
         * @memberOf WePredict.mainController
         * @description  Log function to find out what the points are
         */
        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };


        $scope.message = 'Everyone come and see how good I look!';



        /**
         * @name $scope.alert
         * @function alert
         * @memberOf WePredict.mainController
         * @description  Puts Data into the serive of the CCG Name and ID and navigate to CCG

         * @param {String} id ID of CCG
         * @param {String} desc Name of the CCG
         */
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



        /**
         * @name $scope._2009Update
         * @function _2009Update
         * @memberOf WePredict.mainController
         * @description  Switch HeatMap to use 2009 Data

         */
        $scope._2009Update = function() {
            selectedYear = _2009;
            $scope.ccgheatmapdata = selectedYear[selectedData];
        };

        /**
         * @name $scope._2010Update
         * @function _2010Update
         * @memberOf WePredict.mainController
         * @description  Switch HeatMap to use 2010 Data

         */

        $scope._2010Update = function() {
            selectedYear = _2010;
            $scope.ccgheatmapdata = selectedYear[selectedData];
        };

        /**
         * @name $scope._2011Update
         * @function _2011Update
         * @memberOf WePredict.mainController
         * @description  Switch HeatMap to use 2011 Data

         */


        $scope._2011Update = function() {
            selectedYear = _2011;
            $scope.ccgheatmapdata = selectedYear[selectedData];
        };

        /**
         * @name $scope._2012Update
         * @function _2012Update
         * @memberOf WePredict.mainController
         * @description  Switch HeatMap to use 2012 Data

         */


        $scope._2012Update = function() {
            selectedYear = _2012;
            $scope.ccgheatmapdata = selectedYear[selectedData];
        };

        /**
         * @name $scope._COPDUpdate
         * @function _COPDUpdate
         * @memberOf WePredict.mainController
         * @description  Switch HeatMap to use COPD Data

         */


        $scope.COPDUpdate = function() {
            selectedData = "COPD";
            $scope.ccgheatmapdata = selectedYear[selectedData];
            $scope.keyname = "COPD"
        };

        /**
         * @name $scope.AsthmaUpdate
         * @function AsthmaUpdate
         * @memberOf WePredict.mainController
         * @description  Switch HeatMap to use Asthma Data

         */


        $scope.AsmaUpdate = function() {
            selectedData = "Asma";
            $scope.ccgheatmapdata = selectedYear[selectedData];
            $scope.keyname = "Asthma"
        };

        /**
         * @name $scope.CHDUpdate
         * @function CHDUpdate
         * @memberOf WePredict.mainController
         * @description  Switch HeatMap to use CHD  Data

         */


        $scope.CHDUpdate = function() {
            selectedData = "CHD";
            $scope.ccgheatmapdata = selectedYear[selectedData];
            $scope.keyname = "CHD"
        };
        /**
         * @name $scope.ObesityUpdate
         * @function ObesityUpdate
         * @memberOf WePredict.mainController
         * @description  Switch HeatMap to use Obesity Data

         */


        $scope.ObesityUpdate = function() {
            selectedData = "Obesity";
            $scope.ccgheatmapdata = selectedYear[selectedData];
            $scope.keyname = "Obesity"
        };



        $scope.ccgSelected = {};

        /**
         * @name $scope._2009Update
         * @function _2009Update
         * @memberOf WePredict.mainController
         * @description  Switch HeatMap to use 2009 Data

         */


        $scope.update = function() {

            $timeout(function() {
                var obj = {dec: $scope.ccgSelected.CCG_Name};
                myService.set(obj);
                $location.path('ccg');
                $scope = $scope || angular.element(document).scope();
                $scope.$apply();
            });
        };

        /**
         * @name dataFactory.getCCG.success
         * @function getCCG
         * @memberOf WePredict.mainController
         * @description  Get list of CCG from API

         */

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
                $scope.keyname = "COPD"


            })
            .error(function (error) {
                $scope.message = 'Unable to load customer data: ' + error.message;
            });


        $scope.testOptions = {
            min: 2009,
            max: 2012,
            step: 1,
            precision: 1,
            orientation: 'horizontal',  // vertical
            handle: 'round', //'square', 'triangle' or 'custom'
            tooltip: 'show', //'hide','always'
            tooltipseparator: ':',
            tooltipsplit: false,
            enabled: true,
            naturalarrowkeys: false,
            range: false,
            ngDisabled: false,
            reversed: false
        };
        $scope.model = {
            first: 2009
        };


        /**
         * @name $scope.executeMe
         * @function executeMe
         * @memberOf WePredict.mainController
         * @description  Change data based on the slider value

         */
        $scope.executeMe = function() {
            switch($scope.model.first){
                case 2009: $scope._2009Update();break;
                case 2010:  $scope._2010Update();break;
                case 2011:  $scope._2011Update();break;
                case 2012:  $scope._2012Update();break;
            }
            console.log('done');
        }

        /**
         * @name $scope.$watch
         * @function $watch
         * @memberOf WePredict.mainController
         * @description  Watch Model if change cancel timeout

         */
        $scope.$watch('model.first', function() {
            if (timeout) {
                $timeout.cancel(timeout);
            }
            timeout = $timeout($scope.executeMe,200);
        });


        $(".btn-group > .btn").click(function(){
            $(this).addClass("active").siblings().removeClass("active");
        });

    }]);