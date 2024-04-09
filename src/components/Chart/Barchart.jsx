import React, { useEffect, useState } from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";

const BarChart = ({ indexAxis, dataObj, label, labelX, labelY }) => {
  ChartJS.register(...registerables);
  //   const dataObj = [
  //     { floor: 1, waterUsage: 100 },
  //     { floor: 2, waterUsage: 200 },
  //     { floor: 3, waterUsage: 300 },
  //     // Add more data as needed
  //   ];
  const [ranArray1, setRanArray1] = useState(
    indexAxis === "y"
      ? [
          { label: 1, data: 100 },
          { label: 2, data: 200 },
          { label: 3, data: 300 },
        ]
      : [
          { label: "Monday", data: 50 },
          { label: "Tuesday", data: 30 },
          { label: "Wednesday", data: 60 },
        ]
  );
  let randomNum = 0;
  const ranNum = () => {
    randomNum = Math.floor(Math.random() * 4 + 0);
  };
  useEffect(() => {
    const abc = setInterval(() => {
      ranNum();
      // ranNum2();
      console.log(randomNum);
      setRanArray1(dataObj[randomNum]);
    }, 5000);
    return () => clearInterval(abc);
  }, []);
  const data = {
    labels: ranArray1.map((entry) =>
      indexAxis === "y" ? `Floor ${entry.label}` : entry.label
    ),
    datasets: [
      {
        label,
        data: ranArray1.map((entry) => entry.data),
        backgroundColor: "#36A2EB", // Blue color for bars
        borderColor: "#36A2EB",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis, // Display bars vertically
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
  };

  return (
    <div className="w-100 h-100 d-flex align-items-center">
      <Bar
        data={data}
        options={{
          ...options,
          plugins: {
            tooltip: {
              callbacks: {
                label: (item, data) =>
                  indexAxis === "y"
                    ? item.parsed.x + " L"
                    : item.parsed.y + " AQI",
              },
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;
