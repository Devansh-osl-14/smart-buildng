import React from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Doughnut } from "react-chartjs-2";
const DoughnutChart = ({ waterUsed = "100L", totalCapacity = "150L" }) => {
  ChartJS.register(...registerables);
  // const percentage = (availableWaterLevel / totalCapacity) * 100;

  const data = {
    labels: ["Water Used(Liters)", "Remaining Capacity(Liters)"],
    datasets: [
      {
        // labels: "dsfaghd",
        data: [waterUsed, totalCapacity - waterUsed],
        backgroundColor: [
          "#36A2EB", // Blue for available water
          "#FFCE56", // Yellow for remaining capacity
        ],
        hoverBackgroundColor: ["#36A2EB", "#FFCE56"],
      },
    ],
  };
  return (
    <div>
      <Doughnut
        data={data}
        height={"50%"}
        width={"50%"}
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
