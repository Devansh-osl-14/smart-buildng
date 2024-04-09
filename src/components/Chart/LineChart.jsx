import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  registerables,
} from "chart.js";
import { Line } from "react-chartjs-2";

const LineChart = ({ data1, data2, labelX, labelY }) => {
  const [ranArray1, setRanArray1] = useState([
    { label: "January", value: 100 },
    { label: "February", value: 150 },
    { label: "March", value: 200 },
  ]);
  const [ranArray2, setRanArray2] = useState([
    { label: "January", value: 80 },
    { label: "February", value: 120 },
    { label: "March", value: 180 },
  ]);
  let randomNum = 0;
  const ranNum = () => {
    randomNum = Math.floor(Math.random() * 4 + 0);
  };
  useEffect(() => {
    const abc = setInterval(() => {
      ranNum();
      // ranNum2();
      console.log(randomNum);
      setRanArray1(data1[randomNum]);
      setRanArray2(data2[randomNum]);
    }, 5000);
    return () => clearInterval(abc);
  }, []);
  console.log(data1);
  ChartJS.register(ArcElement, Tooltip, Legend, ...registerables);
  const data = {
    labels: ranArray1?.map((entry) => entry.label),
    datasets: [
      {
        label: labelX,
        data: ranArray1?.map((entry) => {
          return entry.value;
        }),
        // fill: false,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgb(75, 192, 192)",
        tension: 0.1,
        pointStyle: "circle",
      },
      {
        label: labelY,
        data: ranArray2?.map((entry) => entry.value),
        // fill: false,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgb(255, 99, 132)",
        tension: 0.1,
      },
    ],
  };
  return (
    <div className="w-100 h-100 d-flex align-items-center">
      <Line
        data={data}
        width={"fit-content"}
        height={"100%"}
        options={{
          responsive:true,
          scales: {
            x: {
              title: {
                display: true,
                text: labelX,
                color: "white", // X-axis title color
                font: {
                  size: 14, // X-axis title font size
                },
              },
            },
            y: {
              title: {
                display: true,
                text: labelY,
                color: "white", // Y-axis title color
                font: {
                  size: 14, // Y-axis title font size
                },
              },
            },

            //   plugins: {
            //     legend: {
            //       labels: {
            //         color: "#FFFFFF", // Legend label color (white)
            //       },
            //     },
            //   },
          },
          plugins: {
            legend: {
              labels: {
                usePointStyle: true,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default LineChart;
