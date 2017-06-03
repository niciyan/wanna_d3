var data = [ 4,19,33,100,20, 5, 6, 80 ];

var width = 1000, barHeight = 50;

var x = d3.scaleLinear()
	.domain([0, d3.max(data)])
	.range([0, width]);

var chart = d3.select(".chart")
	.attr("width", width)
	.attr("height", barHeight * data.length);

var bar = chart.selectAll("g")
	.data(data)
	.enter().append("g")
	.attr("transform", function(d,i) { return "translate(0, " + i * barHeight + ")"; });

bar.append("rect")
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
    {id: "orange", radius:20},
    {id: "yellow", radius:30},
    {id: "green", radius:40},
    {id: "blue", radius:50},
    {id: "violet", radius:60}
  ],
  links: [
    {source: "red", target: "yellow"},
    {source: "red", target: "blue"},
    {source: "red", target: "green"}
  ]
};

var svg = d3.select("body")
	.append('svg')
	.attr('width', 200)
	.attr('height', 100);


var link = svg.selectAll(".link"),
	node = svg.selectAll(".node");


var circle = node.data(graph.nodes)
	.enter()
	.append("circle"); 

circle.attr("transform", function(d) { return "translate(" + d.radius + ","  + d.radius + ")"; })
	.attr("class", "node")
	.attr('cx', function(d) { d.radius; })
	.attr('cy', function(d) { d.radius; })
	.attr("r", function(d) { d.radius; })
	.style("fill", function(d) { return d.id; });
