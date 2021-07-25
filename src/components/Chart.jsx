import * as d3 from "d3";
import styles from "./Chart.module.scss";

const Chart = ({ x, y, widthX, heightY }) => {
  const margin = { top: 0, right: 55, bottom: 10, left: 0 };
  const width = widthX - margin.left - margin.right;
  const height = heightY - margin.top - margin.bottom;

  let data = [{ mon: 0, amt: 0 }];
  let total = (x * (x + 1)) / 2;
  let yderivate = y / total;
  for (let i = 1; i <= x; i++) {
    let newObj = {
      mon: i,
      amt: yderivate * i + data[i - 1].amt,
    };
    data.push(newObj);
  }

  const getX = d3.scaleLinear().domain([0, x]).range([10, width]);
  const getY = d3.scaleLinear().domain([0, 900]).range([height, 5]);

  const getYAxis = (ref) => {
    const ticksList = [
      0.0, 100.0, 200.0, 300.0, 400.0, 500.0, 600.0, 700.0, 800.0, 900.0,
    ];
    const yAxis = d3
      .axisRight(getY)
      .tickValues(ticksList)
      .tickSize(0)
      .tickFormat((d) => {
        console.log(d);
        return `$ ${parseFloat(d).toFixed(2)}`;
      })
      .tickPadding(7);
    d3.select(ref).call(yAxis);
  };

  const linePath = d3
    .line()
    .x((d) => getX(d.mon))
    .y((d) => getY(d.amt))
    .curve(d3.curveMonotoneX)(data);

  const areaPath = d3
    .area()
    .x((d) => getX(d.mon))
    .y0((d) => getY(d.amt))
    .y1(() => getY(0))
    .curve(d3.curveMonotoneX)(data);

  return (
    <svg
      viewBox={`0 0 ${width + margin.left + margin.right} 
  ${height + margin.top + margin.bottom}`}
    >
      <g
        ref={getYAxis}
        transform={`translate(${width},0)`}
        className={styles.axisY}
      />
      <g
        transform={`translate(${width - 70},${
          parseFloat(y) < 100 ? getY(y) - 10 : getY(y)
        })`}
      >
        <text fontSize="15px" fontWeight="bold" fill="#f06060">
          $ {y}
        </text>
      </g>
      <path
        strokeWidth={5}
        fill="none"
        stroke="url(#linear)"
        d={linePath}
        strokeLinecap="round"
      />
      <path fill="url(#linear2)" d={areaPath} opacity={0.3} />

      <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#edb42d" />
        <stop offset="45%" stopColor="#edb42d" />
        <stop offset="100%" stopColor="#f06060" />
      </linearGradient>
      <linearGradient
        id="linear2"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="0%"
        gradientTransform="rotate(90)"
      >
        <stop offset="50%" stopColor="#f06060" />
        <stop offset="100%" stopColor="#edb42d00" />
      </linearGradient>
    </svg>
  );
};

export default Chart;
