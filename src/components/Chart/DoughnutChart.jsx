import React from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Doughnut } from "react-chartjs-2";
const DoughnutChart = ({ waterUsed, totalCapacity }) => {
  ChartJS.register(...registerables);
  // const percentage = (availableWaterLevel / totalCapacity) * 100;

  const data = {
    labels: ["Water Used(Liters)", "Remaining Capacity(Liters)"],
    datasets: [
      {
        // labels: "dsfaghd",
        data: [waterUsed, totalCapacity - waterUsed],
        backgroundColor: [
          "#1E8FFF", // Blue for available water
          "#5C5C5C", // Yellow for remaining capacity
        ],
        hoverBackgroundColor: ["#1E8FFF", "#5C5C5C"],
      },
    ],
  };
  return (
    <div className="w-100 h-100 d-flex justify-content-center mx-auto">
      <Doughnut
        data={data}
        // height={"50%"}
        // width={"50%"}

        options={{
          plugins: {
            tooltip: {
              callbacks: {
                label: (item) => {
                  return item.parsed + " L";
                },
              },
            },
          },
        }}
      />
    </div>
  );
};

export default DoughnutChart;
