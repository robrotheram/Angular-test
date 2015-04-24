/**
 * @class WePredict.ccgMap
 * @description Directive that Controls the Heatmap Chart
 */
wepredictApp.directive( 'ccgMap', ['$location',
    function ($location) {
        return {
            restrict: 'E',
            scope: {

                data: '=',
                callbackFn:'&',
                heatmap:'=',
                keyname:'='
            },
            /**
             * @name link
             * @function link
             * @memberOf WePredict.ccgMap
             * @description Function called when the view is shown on the page
             * @param {scope} scope Object that contains objects listed in the Html element e.g <map data callback > ect
             * @param {element} element The containing element of this map
             */
            link: function (scope, element) {
                d3.select(window).on("resize", throttle);
                var scaleValue = 0;
                var zoom = d3.behavior.zoom()
                    .scaleExtent([1, 9])
                    .on("zoom", move);
                var width = $('#ccgMap').width();
                var projection;
                var height = (width )*1;
                var topo,projection,path,svg,g;
                var scaleValue = 4000;

                if($(document).width()>1700){
                    var scaleValue = 8000;
                }
                if($(document).width()>1500){
                    var scaleValue = 5000;
                }
                if($(document).width()<1500){
                    var scaleValue = 4000;
                }
                if($(document).width()<1200){
                    var scaleValue = 2500;
                }
                if($(document).width()<750){
                    var scaleValue = 1500;
                }

                setup(width,height);

                var tooltip = d3.select("#container").append("div").attr("class", "tooltip hidden");
                var country;
                var lowest;
                var highest;
                var q;

                d3.json("js/ccg.json", function(error, world) {
                    var countries = topojson.feature(world, world.objects.CCG).features;
                    topo = countries;
                    draw(scope,topo,null);
                });


                function getColor(name){

                    var xxx = (name).replace("and", "And");
                    //console.log(scope.heatmap);
                    //var dv  = $.grep(data, function(e){ return e.id == xxx; });
                    //console.log(dv);
                    if(scope.heatmap.length>10){
                        return d3.rgb(240,249,232);
                    }

                }

                function draw (scope,topo) {

                    if(scope.heatmap.length>2){
                        lowest = Number.POSITIVE_INFINITY;
                        highest = Number.NEGATIVE_INFINITY;
                        var tmp;
                        for (var i=scope.heatmap.length-1; i>=0; i--) {
                            tmp = scope.heatmap[i]["value"];
                            if (tmp < lowest) lowest = tmp;
                            if (tmp > highest) highest = tmp;
                        }
                        console.log(highest, lowest);

                        q = d3.scale.quantize().domain([lowest, highest]).range([d3.rgb(240,249,232), d3.rgb(204,235,197), d3.rgb(168,221,181), d3.rgb(123,204,196), d3.rgb(78,179,211), d3.rgb(43,140,190), d3.rgb(8,88,158)]);

                    }


                    country = g.selectAll(".country").data(topo);

                    country.enter().insert("path")
                        .attr("class", "country")
                        .attr("d", path)
                        .attr("id", function (d, i) {
                            return d.id;
                        })
                        .attr("title", function (d, i) {
                            return d.properties.name;
                        });

                    country
                        .on("load", function (d, i) {
                            alert(d);
                        })
                        .on("mousemove", function (d, i) {
                            var mouse = d3.mouse(svg.node()).map(function (d) {
                                return parseInt(d);
                            });
                            $("#CCGData").show();
                            $("#CCGData").html(d.properties.description);
                            tooltip.classed("hidden", true);
                        })
                        .on("mouseout", function (d, i) {
                            // $("#CCGData").hide();
                            tooltip.classed("hidden", true);
                        })
                        .on("dblclick", function (d, i) {
                            scope.callbackFn({id: d.properties.name, desc: d.properties.description});
                        });

                }

                function setup(width,height){
                    projection = d3.geo.mercator()
                        .center([-2, 53])
                        .scale(scaleValue)
                        .translate([width / 2, height / 2]);

                    path = d3.geo.path().projection(projection);

                    svg = d3.select(element[0]).append("svg")
                        .attr("width", width)
                        .attr("height", height)
                        .call(zoom)
                        //.on("click", click)
                        .append("g");
                    g = svg.append("g");
                }




                function move() {

                    var t = d3.event.translate;
                    var s = d3.event.scale;
                    zscale = s;
                    var h = height/4;
                    zoom.translate(t);


                    zoom.translate(t);
                    g.attr("transform", "translate(" + t + ")scale(" + s + ")");

                    //adjust the country hover stroke width based on zoom level
                    d3.selectAll(".country").style("stroke-width", 1.5 / s);

                    //console.log(t);

                }

                scope.$watch('heatmap', function(newValue, oldValue) {
                    if (newValue){


                        if(scope.heatmap.length>10){
                            lowest = Number.POSITIVE_INFINITY;
                            highest = Number.NEGATIVE_INFINITY;
                            var tmp;
                            for (var i=scope.heatmap.length-1; i>=0; i--) {
                                tmp = scope.heatmap[i]["value"];
                                if (tmp < lowest) lowest = tmp;
                                if (tmp > highest) highest = tmp;
                            }
                            console.log(highest, lowest);

                            q = d3.scale.quantize().domain([lowest, highest]).range([d3.rgb(240,249,232), d3.rgb(204,235,197), d3.rgb(168,221,181), d3.rgb(123,204,196), d3.rgb(78,179,211), d3.rgb(43,140,190), d3.rgb(8,88,158)]);

                            var tp = null;
                            $('#keyTable').empty();
                            $('#keyTable').append('<colgroup><col width="30%"/><col width="70%"/></colgroup>');
                            $('#keyTable').append('<tr><td style="text-align: center">Indicator Value</td><td style="text-align: center">'+scope.keyname+'</td></tr>');

                            for(var i = lowest;i<highest;i++){
                                if(q(i)!=tp){
                                    tp = q(i);
                                    //console.log(i,tp);
                                    $('#keyTable').append('<tr><td>'+ i.toFixed(2)+'</td><td style="width:100%; background-color: '+tp.toString()+'"></td></tr>');
                                }
                            }
                            d3.select('svg').remove();
                            setup(width,height);
                            country = g.selectAll(".country").data(topo);

                            country.enter().insert("path")
                                .attr("class", "country")
                                .attr("d", path)
                                .attr("id", function (d, i) {
                                    return d.id;
                                })
                                .attr("title", function (d, i) {
                                    return d.properties.name;
                                });

                            country
                                .on("load", function (d, i) {
                                    alert(d);
                                })
                                .on("mousemove", function (d, i) {
                                    var mouse = d3.mouse(svg.node()).map(function (d) {
                                        return parseInt(d);
                                    });
                                    var xxx = (d.properties.description).replace(" and", " And");


                                    var dv  = $.grep(scope.heatmap, function(e){ return e.id == xxx; });

                                    $("#CCGData").show();
                                    $("#CCGData").html(d.properties.description +"<br> Indicator Value: "+(dv[0]["value"]).toFixed(2));
                                    tooltip.classed("hidden", true);
                                })
                                .on("mouseout", function (d, i) {
                                    // $("#CCGData").hide();
                                    tooltip.classed("hidden", true);
                                })
                                .on("dblclick", function (d, i) {
                                    scope.callbackFn({id: d.properties.name, desc: d.properties.description});
                                })
                                .style("fill", function (d) {
                                    var xxx = (d.properties.description).replace(" and", " And");
                                    var dv  = $.grep(scope.heatmap, function(e){ return e.id == xxx; });
                                    if(dv[0]!=null){
                                        return(q(dv[0]["value"]));
                                    }else{
                                        console.log(xxx);
                                    }


                                });

                        }




                    }
                }, true);





                var throttleTimer;
                function throttle() {
                    window.clearTimeout(throttleTimer);
                    throttleTimer = window.setTimeout(function() {
                        redraw();
                    }, 200);
                }
            }}}
]);