function getRect(cellSize) {

    function monthPath(t0) {
        var t1 = new Date(t0.getFullYear(), t0.getMonth() + 1, 0),
            d0 = t0.getDay(),
            w0 = d3.time.weekOfYear(t0),
            d1 = t1.getDay(),
            w1 = d3.time.weekOfYear(t1);
        return "M" + (w0 + 1) * cellSize + "," + d0 * cellSize + "H" + w0 * cellSize + "V" + 7 * cellSize + "H" + w1 * cellSize + "V" + (d1 + 1) * cellSize + "H" + (w1 + 1) * cellSize + "V" + 0 + "H" + (w0 + 1) * cellSize + "Z";
    }

    var width = 960,
        //cellSize = 17, // 17 cell size
        height = cellSize * 7 + 5; // 136,

    var percent = d3.format(".1%"),
        format = d3.time.format("%Y-%m-%d");

    var svg = d3.select("body").selectAll("svg")
        .data(d3.range(2003, 2009))
        .enter().append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("class", "RdYlGn")
        .append("g")
        .attr("transform", "translate(" + ((width - cellSize * 53) / 2) + "," + (height - cellSize * 7 - 1) + ")");

    svg.append("text")
        .attr("transform", "translate(-6," + cellSize * 3.5 + ")rotate(-90)")
        .style("text-anchor", "middle")
        .text(function (d) {
            return d;
        });

    var rect = svg.selectAll(".day")
        .data(function (d) {
            return d3.time.days(new Date(d, 0, 1), new Date(d + 1, 0, 1));
        })
        .enter().append("rect")
        .attr("class", "day")
        .attr("width", cellSize)
        .attr("height", cellSize)
        .attr("x", function (d) {
            return d3.time.weekOfYear(d) * cellSize;
        })
        .attr("y", function (d) {
            return d.getDay() * cellSize;
        })
        .datum(format);

    rect.append("title")
        .text(function (d) {
            return d;
        });

    svg.selectAll(".month")
        .data(function (d) {
            return d3.time.months(new Date(d, 0, 1), new Date(d + 1, 0, 1));
        })
        .enter().append("path")
        .attr("class", "month")
        .attr("d", monthPath);

    return rect;
}

function plot_CalHeat(error, csvdata) {
    if (error) {
        throw error;
    }

    var cellSize = 12;

    var rect = getRect(cellSize);

    var data = d3.nest()
        .key(function (d) {
            return d.Date;
        })
        .rollup(function (d) {
            return d[0].Cancelled_avg
        })
        .map(csvdata);

    var value_max = d3.max(csvdata, function (d) {
        return +d.Cancelled_avg;
    });

    var value_min = d3.min(csvdata, function (d) {
        return +d.Cancelled_avg;
    });

    var color = d3.scale.quantize()
        .domain([value_min, value_max])
        .range(d3.range(11).map(function (d) {
            return "q" + (10 - d) + "-11";
        }));

    rect.filter(function (d) {
            return d in data;
        })
        .attr("class", function (d) {
            return "day " + color(data[d]);
        })
        .select("title")
        .text(function (d) {
            return d + ": " + percent(data[d]);
        });

};

d3.csv("data/fligths-DateCancelled.csv", function (d) {
    d['Cancelled_avg'] = +d['Cancelled_avg'];
    //d['Date'] = format.parse(d['Date']);
    return d;
}, plot_CalHeat);