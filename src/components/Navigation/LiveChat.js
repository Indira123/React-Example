import React, { Component } from 'react';
import * as d3 from "d3v4";
import '../../styles/navigation.scss';

class LiveChat extends Component {
    componentDidMount() {
        const data = [10, 20, 100];

        const width = 1200,
            height = 500,
            radius = Math.min(width, height) / 2;

        const color = d3.scaleOrdinal()
            .range(["#98abc5", "#8a89a6", "#7b6888"]);

        const arc = d3.arc()
            .outerRadius(radius - 10)
            .innerRadius(0);

        const labelArc = d3.arc()
            .outerRadius(radius - 40)
            .innerRadius(radius - 40);

        const pie = d3.pie()
            .sort(null)
            .value(function (d) { return d; });

        const svg = d3.select(".arc").append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        const g = svg.selectAll(".arc")
            .data(pie(data))
            .enter().append("g")
            .attr("class", "arc");

        g.append("path")
            .attr("d", arc)
            .style("fill", function (d) { return color(d.data); });

        g.append("text")
            .attr("transform", function (d) { return "translate(" + labelArc.centroid(d) + ")"; })
            .attr("dy", ".35em")
            .text(function (d) { return d.data; });
    }
    render() {
        return (
            <div>
                <h2 className='text-center'>Pie chart using D3</h2>
                <div className='arc'>
                </div>
            </div>
        )
    }
}
export default LiveChat;