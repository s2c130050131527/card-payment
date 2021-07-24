import { useRef } from "react";
import * as d3 from "d3";

const margin = { top: 0, right: 0, bottom: 20, left: 20 },
  width = 364 - margin.left - margin.right,
  height = 124 - margin.top - margin.bottom,
  color = "OrangeRed";

const Chart = ({ x, y }) => {
  const getX = d3.scaleLinear().domain([0, x]).range([0, width]);
  const getY = d3.scaleLinear().domain([y, 0]).range([height, 0]);

  const getXAxis = (ref) => {
    const xAxis = d3.axisBottom(getX);
    d3.select(ref).call(xAxis);
  };

  const getYAxis = (ref) => {
    const yAxis = d3.axisLeft(getY).tickSize(0).tickPadding(7);
    d3.select(ref).call(yAxis);
  };

  return (
    <svg
      viewBox={`0 0 ${width + margin.left + margin.right} 
  ${height + margin.top + margin.bottom}`}
    >
      <g className="axis" ref={getYAxis} />
      <g
        className="axis xAxis"
        ref={getXAxis}
        transform={`translate(0,${height})`}
      />
    </svg>
  );
};

export default Chart;
