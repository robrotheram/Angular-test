/**
 * Created by robertfletcher on 16/03/15.
 */
/**
 * Created by robert on 12/03/15.
 */

wepredictApp.directive( 'chordiagram', ['$location',
    function ($location) {
        return {
            restrict: 'E',
            scope: {

                data: '=',
                callbackFn:'&',
                ccgid:'='
            },
            link: function (scope, element) {
                // From http://mkweb.bcgsc.ca/circos/guide/tables/


                var width = element.parent()[0].offsetWidth; //<-- changed from fixed width.
                    height = 580;  //<--changed from fixed width.
                    innerRadius = Math.min(width, height) * .41,
                    outerRadius = innerRadius * 1.1;

                // Add a group per neighborhood.

                var svg = d3.select(element[0]).append("svg") // <-- Line changed from d3.select("body")
                    .attr("width", width)
                    .attr("height", height)
                    .append("g")
                    .attr("id", "circle")
                    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");


                var fill = d3.scale.ordinal()
                    .domain(d3.range(12))
                    .range(['rgb(166,206,227)','rgb(31,120,180)','rgb(178,223,138)','rgb(51,160,44)','rgb(251,154,153)','rgb(227,26,28)','rgb(253,191,111)','rgb(255,127,0)','rgb(202,178,214)','rgb(106,61,154)','rgb(255,255,153)','rgb(177,89,40)']);


                var formatPercent = d3.format(".1%");

                var arc = d3.svg.arc()
                    .innerRadius(innerRadius)
                    .outerRadius(outerRadius);

                var layout = d3.layout.chord()
                    .padding(.04)
                    .sortSubgroups(d3.descending)
                    .sortChords(d3.ascending);

                var path = d3.svg.chord()
                    .radius(innerRadius);

                svg.append("circle")
                    .attr("r", outerRadius);

// Compute the chord layout.
                        layout.matrix(scope.ccgid);

// Add a group per neighborhood.
                        var group = svg.selectAll(".group")
                            .data(layout.groups)
                            .enter().append("g")
                            .attr("class", "group")
                            .on("mouseover", mouseover);

// Add a mouseover title.
// group.append("title").text(function(d, i) {
// return cities[i].name + ": " + formatPercent(d.value) + " of origins";
// });

// Add the group arc.
                        var groupPath = group.append("path")
                            .attr("id", function(d, i) { return "group" + i; })
                            .attr("d", arc)
                            .style("fill", function(d, i) { return "#CCC" });

// Add a text label.
                        var groupText = group.append("text")
                            .attr("x", 6)
                            .attr("dy", 15);

                        groupText.append("textPath")
                            .attr("xlink:href", function(d, i) { return "#group" + i; })
                            .text(function(d, i) { return "HELLO"; });

// Remove the labels that don't fit. :(
                        groupText.filter(function(d, i) { return groupPath[0][i].getTotalLength() / 2 - 16 < this.getComputedTextLength(); })
                            .remove();

// Add the chords.
                        var chord = svg.selectAll(".chord")
                            .data(layout.chords)
                            .enter().append("path")
                            .attr("class", "chord")
                            .style("fill", function(d) { return fill(d.target.index); })
                            .attr("d", path);

// Add an elaborate mouseover title for each chord.
                        chord.append("title").text(function(d) {
                            return "HELLOSDASDA";
                        });

                        function mouseover(d, i) {
                            chord.classed("fade", function(p) {
                                return p.source.index != i
                                    && p.target.index != i;
                            });
                        }



            }
        }
    }
]);
