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
    {id: "red", radius: 30},
    {id: "orange", radius:30},
    {id: "yellow", radius:30},
    {id: "green", radius:30},
    {id: "blue", radius:30},
    {id: "violet", radius:30},
    {id: "red", radius: 30},
    {id: "orange", radius:30},
    {id: "yellow", radius:30},
    {id: "green", radius:30},
    {id: "blue", radius:30},
    {id: "violet", radius:30}
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

// node.data(graph.nodes)
// 	.enter()
// 	.append("text")
// 	.text(function(d){ return d.id })

var element = node.data(graph.nodes)
	.enter()
	.append("g") 
	.attr("transform", function(d) { return "translate(" + svgWidth / 2 + ","  + svgHeight / 2 + ")"; });

var circle = element.append('circle');

circle.attr("class", "node")
	.attr("r", function(d) { return d.radius ; })
	.attr('cx', 0)
	.attr("cy", 0)
	.style("fill", function(d) { return d.id; });

circle.transition()
	.delay(500)
	.duration(1000)
	.ease(d3.easeExp)
	.attr('cx', function(d,i) { return svgWidth / 3 * Math.cos( 2 * Math.PI * i / graph.nodes.length); })
	.attr('cy', function(d,i) { return svgWidth / 3 * Math.sin( 2 * Math.PI * i / graph.nodes.length); });

var text = element.append('text');

text.attr('text-anchor', 'middle')
	.text(function(d){ return d.id; })
	.attr('x', 0)
	.attr("y", 0)
	
text.transition()
	.delay(500)
	.duration(1000)
	.ease(d3.easeExp)
	.attr('x', function(d,i) { return svgWidth / 3 * Math.cos( 2 * Math.PI * i / graph.nodes.length); })
	.attr('y', function(d,i) { return svgWidth / 3 * Math.sin( 2 * Math.PI * i / graph.nodes.length); });
