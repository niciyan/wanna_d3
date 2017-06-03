var data = [ 4,19,33,100,20, 5, 6, 80 ];

var width = 1000, barHeight = 20;

var x = d3.scaleLinear()
	.domain([0, d3.max(data)])
	.range([0, width]);

var chart = d3.select(".chart")
	.attr("width", width)
	.attr("height", barHeight * data.length);


var bar = chart.selectAll("g")
	.data(data)
	.enter().append("g")
	.attr("transform", function(d,i) { return "translate(0, " + i * barHeight + ")"; })
	.append("g")
	.call(d3.axisBottom(x));

bar.append("rect")
	.transition()
	.delay(500)
	.duration(1000)
	.ease(d3.easeExp)
	.attr("width", x)
	.attr("height", barHeight - 1);

bar.append("text")
	.attr("x", function(d) { return x(d) -3; })
	.attr("y", barHeight / 2)
	.attr("dy", ".35em")
	.text(function(d) { return d; });

var graph = {
  nodes: [
    {id: "red", radius: 10},
    {id: "orange", radius:10},
    {id: "yellow", radius:10},
    {id: "green", radius:10},
    {id: "blue", radius:10},
    {id: "violet", radius:10},
    {id: "red", radius: 10},
    {id: "orange", radius:10},
    {id: "yellow", radius:10},
    {id: "green", radius:10},
    {id: "blue", radius:10},
    {id: "violet", radius:10}
  ],
  links: [
    {source: "red", target: "yellow"},
    {source: "red", target: "blue"},
    {source: "red", target: "green"}
  ]
};

var svgWidth = 400;
var svgHeight = 400;

var svg = d3.select("body")
	.append('svg')
	.attr('width', svgWidth)
	.attr('height', svgHeight)
	.style('stroke', '#100');


var link = svg.selectAll(".link"),
	node = svg.selectAll(".node");


var circle = node.data(graph.nodes)
	.enter()
	.append("circle"); 

circle.attr("transform", function(d) { return "translate(" + svgWidth / 2 + ","  + svgHeight / 2 + ")"; })
	.attr("class", "node")
	.attr("r", function(d) { return d.radius + 10; })
	.attr('cx', function(d,i) { return svgWidth / 3 * Math.cos( 2 * Math.PI * i / graph.nodes.length); })
	.attr("cy", 0)
	.style("fill", function(d) { return d.id; });

circle.transition()
	.delay(500)
	.duration(1000)
	.ease(d3.easeExp)
	.attr("r", 10)
	.attr('cx', function(d,i) { return svgWidth / 3 * Math.cos( 2 * Math.PI * i / graph.nodes.length); })
	.attr('cy', function(d,i) { return svgWidth / 3 * Math.sin( 2 * Math.PI * i / graph.nodes.length); });
