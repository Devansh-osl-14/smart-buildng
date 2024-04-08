import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  registerables,
} from "chart.js";
import { Line } from "react-chartjs-2";

const LineChart = ({ data1, data2, labelX, labelY }) => {
  ChartJS.register(ArcElement, Tooltip, Legend, ...registerables);
  const data = {
    labels: data1.map((entry) => entry.label),
    datasets: [
      {
        label: labelX,
        data: data1.map((entry) => entry.value),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
      {
        label: labelY,
        data: data2.map((entry) => entry.value),
        fill: false,
        borderColor: "rgb(255, 99, 132)",
        tension: 0.1,
      },
    ],
  };
  return (
    <div className="w-100 d-flex align-items-center">
      <Line data={data} width={"fit-content"} height={"100%"} />
    </div>
  );
};

export default LineChart;
