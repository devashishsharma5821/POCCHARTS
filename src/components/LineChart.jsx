import React, { useRef, useEffect } from "react";
import "../App.css";
import { select } from "d3";

const data = [25, 38, 45, 60, 20];

const LineChart = () => {
  const svgRef = useRef();
  useEffect(() => {
    console.log(svgRef);
    const svg = select(svgRef.current);
  });

  return <svg ref={svgRef}></svg>;
};

export default LineChart;
