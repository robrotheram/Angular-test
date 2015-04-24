/**
 * @class WePredict.ccgAsmathaChartController
 * @description Controller that controllers the Asmatha chart
 */
wepredictApp.controller('ccgAsmathaChartController', ['myService','dataFactory','$scope','$location','$timeout', function(myService,dataFactory,$scope,$location,$timeout) {
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

/**
 * @class WePredict.ccgCOPDChartController
 * @description Controller that controllers the COPD chart
 */

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


/**
 * @class WePredict.ccgCHDChartController
 * @description Controller that controllers the CHD chart
 */
wepredictApp.controller('ccgCHDChartController', ['myService','dataFactory','$scope','$location','$timeout', function(myService,dataFactory,$scope,$location,$timeout) {
    var obj = myService.get();

    $scope.chartConfig = {
        options: {
            chart: {  type: 'column' },
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



/**
 * @class WePredict.ccgObesityChartController
 * @description Controller that controllers the Obesity chart
 */


wepredictApp.controller('ccgObesityChartController', ['myService','dataFactory','$scope','$location','$timeout', function(myService,dataFactory,$scope,$location,$timeout) {
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

/**
 * @class WePredict.ccgFluChartController
 * @description Controller that controllers the Flu chart
 */

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


    function checkNumber(obj){
        if((obj=="")||(obj==null)){
            return 0;
        }else{
            return obj;
        }
    }




    dataFactory.getCCGFlu(obj.dec)
        .success(function (data) {

            var l_Dara = [
                parseFloat(checkNumber(data[0]["2010_flu06"])),
                parseFloat(checkNumber(data[0]["2010_flu65"]))
            ];

            console.log("ObesityData ="+ l_Dara);

            $scope.chartConfig.series = [{
                name:obj.dec,
                data: l_Dara
            }];


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



/**
 * @class WePredict.customChartController
 * @description Controller that controllers the Custom chart
 */

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
        loading: false,
        useHighStocks: false
    };

    var masterData;

    $scope.selectedData = "Flu";

    /**
     * @name $scope.$watchCollection
     * @function $watchCollection
     * @memberOf WePredict.customChartController
     * @description Watch fuction used to check it the "selectedData" in the scope changes, if so fires changeData()
     */

    $scope.$watchCollection('selectedData', function() {
        changeData();
    });

    /**
     * @name changeData
     * @function changeData
     * @memberOf WePredict.customChartController
     * @description Depending on the data being selected e.g Flu, Obesity e.t.c it changes the axis labels and then gets the data from chatData
     */
    function changeData(){
        var result =  $scope.chatData.filter(function( obj ) {
            return obj.name == $scope.selectedData;
        });

        switch(result[0].name){
            case "Flu":
                $scope.chartConfig.xAxis={
                    categories: ['Flu vaccine 6 month+', 'Flu vaccine 65+']
                };
                $scope.chartConfig.title= { text: 'Uptake of Seasonal Flu Vaccine '};
                break;
            case "Obesity":
                $scope.chartConfig.xAxis={
                    title: {text: 'Year'},
                    categories: ["2009","2010","2011","2012","2013"]
                };
                $scope.chartConfig.title= { text: 'Obesity QOF prevalence'};
                break;
            case "CHD":
                $scope.chartConfig.xAxis={
                    title: {text: 'Year'},
                    categories: ["2009","2010","2011","2012"]
                };
                $scope.chartConfig.title= { text: 'CHD QOF prevalence'};
                break;
            case "COPD":
                $scope.chartConfig.xAxis={
                    title: {text: 'Year'},
                    categories: ["2009","2010","2011","2012","2013"]
                };
                $scope.chartConfig.title= { text: 'COPD QOF prevalence'};
                break;
            case "Asthma":
                $scope.chartConfig.xAxis={
                    title: {text: 'Year'},
                    categories: ["2009","2010","2011","2012"]
                };
                $scope.chartConfig.title= { text: 'Asthma QOF prevalence'};
                break;

            }
            $scope.chartConfig.series = result[0].data;

            $scope.chartConfig.yAxis= {
                floor: 0,
                ceiling: 100,
                title: {text: 'Indicator Value'}

            };
     };

    $scope.dataobj = ["Flu","Obesity","COPD","CHD","asthma"];
    $scope.chatData = [
        {name :"Flu", data:[]},
        {name :"Obesity", data:[]},
        {name :"COPD", data:[]},
        {name :"CHD", data:[]},
        {name :"asthma", data:[]}
    ];


    /**
     * @name checkNumber
     * @function checkNumber
     * @memberOf WePredict.customChartController
     * @description  If number is empty or null converts it to 0 for the chart
     * @param {*} obj Object item from ChartData
     * @returns {*} obj Object from chartData or 0 if empty or null
     *
     */

    function checkNumber(obj){
        if((obj=="")||(obj==null)){
            return 0;
        }else{
            return obj;
        }
    }


    dataFactory.getCCGData(obj.dec)
        .success(function (data) {
            masterData = data;

            $scope.chartConfig.series = [];

            $.each(masterData, function(key1, item) {
                var o_data = [
                    parseFloat(item["2009_Obesity_QOF"]),
                    parseFloat(item["2010_Obesity_QOF"]),
                    parseFloat(item["2011_Obesity_QOF"]),
                    parseFloat(item["2012_Obesity_QOF"]),
                    parseFloat(item["2013_Obesity_QOF"])
                ];

                var f_Dara = [
                    parseFloat(checkNumber(item['2010_flu06'])),
                    parseFloat(checkNumber(item['2010_flu65']))
                ];
                var a_Dara = [
                    parseFloat(checkNumber(item["2009_ASTHMA"])),
                    parseFloat(checkNumber(item["2010_ASTHMA"])),
                    parseFloat(checkNumber(item["2011_ASTHMA"])),
                    parseFloat(checkNumber(item["2012_ASTHMA"]))
                ];

                var copd_Dara = [
                    parseFloat(checkNumber(item["2009_COPD_QOF"])),
                    parseFloat(checkNumber(item["2010_COPD_QOF"])),
                    parseFloat(checkNumber(item["2011_COPD_QOF"])),
                    parseFloat(checkNumber(item["2012_COPD_QOF"])),
                    parseFloat(checkNumber(item["2013_COPD_QOF"]))
                ];
                var chd_Dara = [
                    parseFloat(checkNumber(item["2009_CHD_QOF"])),
                    parseFloat(checkNumber(item["2010_CHD_QOF"])),
                    parseFloat(checkNumber(item["2011_CHD_QOF"])),
                    parseFloat(checkNumber(item["2012_CHD_QOF"]))
                ];

                var obj = { name:item["Practice_Name"],  data:f_Dara };
                $scope.chatData[0].data.push(obj);


                var obj = { name:item["Practice_Name"],  data:o_data };
                $scope.chatData[1].data.push(obj);

                var obj = { name:item["Practice_Name"],  data: copd_Dara };
                $scope.chatData[2].data.push(obj);

                var obj = { name:item["Practice_Name"],  data: chd_Dara };
                $scope.chatData[3].data.push(obj);

                var obj = { name:item["Practice_Name"],  data: a_Dara };
                $scope.chatData[4].data.push(obj);
            });

            $scope.chartConfig.series = $scope.chatData[0].data;
            $scope.chartConfig.options.chart.type ="bar";

            $scope.chartConfig.xAxis={
                categories: ['Flu vaccine 6 month+', 'Flu vaccine 65+']
            };
            $scope.chartConfig.title= { text: 'Uptake of Seasonal Flu Vaccine '};

            $scope.chartConfig.yAxis= {
                title: {text: 'Indicator Value'},
                min: 0,
                max: 100
            };

        })
        .error(function (error) {
            $scope.message = 'Unable to load customer data: ' + error.message;
            console.log($scope.message);
        });


    /**
     * @name $scope.hideall
     * @function checkNumber
     * @memberOf WePredict.customChartController
     * @description  Hidees all data in the visible series and shows the first value.
     *
     */
    $scope.hideall = function() {
        changeData();
        $($scope.chartConfig.series).each(function(){
            console.log(this);
            this.visible = false;
        });
        $scope.chartConfig.series[0].visible = true;
    }


    /**
     * @name $scope.showall
     * @function checkNumber
     * @memberOf WePredict.customChartController
     * @description  Shows all data in the visible series.
     *
     */
    $scope.showall = function() {
        $($scope.chartConfig.series).each(function(){
            console.log(this);
            delete this.visible;
        });
        $($scope.chartConfig.series).each(function(){

             this.visible = true;
        });
       // $scope.chartConfig.series[0].visible = true;
    }


    $scope.chartTypes = [
        {"id": "bar", "title": "Bar"},
        {"id": "line", "title": "Line"},
        {"id": "spline", "title": "Smooth line"},
        {"id": "area", "title": "Area"},
        {"id": "areaspline", "title": "Smooth area"},
        {"id": "column", "title": "Column"},
        {"id": "scatter", "title": "Scatter"}
    ];


}]);



/**
 * @class WePredict.cordDiagramController
 * @description Controller that controllers the cord chart
 */
wepredictApp.controller('cordDiagramController', ['myService','dataFactory','$scope','$location','$timeout', function(myService,dataFactory,$scope,$location,$timeout) {
    var obj = myService.get();

 dataFactory.getCCGData(obj.dec)
        .success(function (data) {
            masterData = data;
         $.each(masterData, function(key1, item) {
               /* var o_data = [
                    parseFloat(item["2009_Obesity_QOF"]),
                    parseFloat(item["2010_Obesity_QOF"]),
                    parseFloat(item["2011_Obesity_QOF"]),
                    parseFloat(item["2012_Obesity_QOF"]),
                    parseFloat(item["2013_Obesity_QOF"])
                ];

                var f_Dara = [
                    parseFloat(checkNumber(item['2010_flu06'])),
                    parseFloat(checkNumber(item['2010_flu65']))
                ];
                var a_Dara = [
                    parseFloat(checkNumber(item["2009_ASTHMA"])),
                    parseFloat(checkNumber(item["2010_ASTHMA"])),
                    parseFloat(checkNumber(item["2011_ASTHMA"])),
                    parseFloat(checkNumber(item["2012_ASTHMA"]))
                ];

                var copd_Dara = [
                    parseFloat(checkNumber(item["2009_COPD_QOF"])),
                    parseFloat(checkNumber(item["2010_COPD_QOF"])),
                    parseFloat(checkNumber(item["2011_COPD_QOF"])),
                    parseFloat(checkNumber(item["2012_COPD_QOF"])),
                    parseFloat(checkNumber(item["2013_COPD_QOF"]))
                ];
                var chd_Dara = [
                    parseFloat(checkNumber(item["2009_CHD_QOF"])),
                    parseFloat(checkNumber(item["2010_CHD_QOF"])),
                    parseFloat(checkNumber(item["2011_CHD_QOF"])),
                    parseFloat(checkNumber(item["2012_CHD_QOF"]))
                ];*/

                var chartd= [
                    { "Datax": 2009,  "y":parseFloat(checkNumber(item["2009_CHD_QOF"])) },
                    { "Datax": 2010,  "y":parseFloat(checkNumber(item["2010_CHD_QOF"])) },
                    { "Datax": 2011,  "y":parseFloat(checkNumber(item["2011_CHD_QOF"])) },
                    { "Datax": 2012,  "y":parseFloat(checkNumber(item["2012_CHD_QOF"])) },
                ];

                var chartA= [
                    { "Datax": 2009,  "y":parseFloat(checkNumber(item["2009_ASTHMA"])) },
                    { "Datax": 2010,  "y":parseFloat(checkNumber(item["2010_ASTHMA"])) },
                    { "Datax": 2011,  "y":parseFloat(checkNumber(item["2011_ASTHMA"])) },
                    { "Datax": 2012,  "y":parseFloat(checkNumber(item["2012_ASTHMA"])) },
                ];

                    var practicename = item["Practice_Name"];
                    var practiceIDObesity = 'obesity'+practicename.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '');
                    var practiceIDAsmtha = 'asmtha'+practicename.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '');
                    $('#chartdataTable').append('<tr>' +
                    '<td>'+practicename+'</td>' +
                    '<td style="padding: 0px"><div id="'+practiceIDObesity+'" style="height:60px; width: 100%;"></div></td>' +
                    '<td style="padding: 0px"><div id="'+practiceIDAsmtha+'" style="height:60px; width: 100%;"></div></td>' +
                    '</tr>');
                    makeChart(('#'+practiceIDObesity),chartd);
                    makeChart(('#'+practiceIDAsmtha),chartA);




            });
        })
        .error(function (error) {
            $scope.message = 'Unable to load customer data: ' + error.message;
            console.log($scope.message);
        });






    /**
     * @name checkNumber
     * @function checkNumber
     * @memberOf WePredict.customChartController
     * @description  If number is empty or null converts it to 0 for the chart
     * @param {*} obj Object item from ChartData
     * @returns {*} obj Object from chartData or 0 if empty or null
     *
     */

    function checkNumber(obj){
        if((obj=="")||(obj==null)){
            return 0;
        }else{
            return obj;
        }
    }




    function makeChart(id,data){
        var margin = {top: 0, right: 0, bottom: 0, left: 0};

        var c_width = $(id).width()- margin.left - margin.right;
        var c_height = $(id).height()- margin.top - margin.bottom;
        console.log(c_width,c_height);



        var x = d3.scale.linear()
            .range([0, c_width]);

        var y = d3.scale.linear()
            .range([c_height, 0]);

        var xAxis = d3.svg.axis()
            .scale(x)
            .tickFormat(d3.format(".0f"))
            .ticks(4)
            .orient("bottom");

        var yAxis = d3.svg.axis()
            .scale(y)
            .ticks(4)

            .orient("left");

        var line = d3.svg.area()
            .interpolate("monotone")
            .x(function(d) { return x(d.Datax); })
            .y0(c_height)
            .y1(function(d) { return y(d.y); });

        var svg = d3.select(id).append("svg")
            .attr("width", c_width + margin.left + margin.right)
            .attr("height", c_height+ margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");



            x.domain([2009,2012]);
            y.domain([d3.min(data, function(d) { return d.y; }), d3.max(data, function(d) { return d.y; })]);

            svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + c_height + ")")

                .call(xAxis);

            svg.append("g")
                .attr("class", "y axis")
                .call(yAxis)


            svg.append("path")
                .datum(data)
                .attr("class", "area")
                .attr("d", line);

        
    }






}]);




