import { Grid } from "@mui/material";
import React from "react";
import LineChart from "../Chart/LineChart";

const EnergyChart = ({ productionData, consumptionData }) => {
  return (
    <Grid
      container
      lg={5.5}
      md={12}
      bgcolor={"#051527"}
      height={"auto"}
      margin={3}
    >
      <Grid item lg={12} xs={12} my={"auto"}>
        <h3 className="font-grey text-center mt-1">Energy Analysis</h3>

        <LineChart
          data1={productionData}
          data2={consumptionData}
          labelX={"Energy Production"}
          labelY={"Energy Consumption"}
        />
      </Grid>
    </Grid>
  );
};

export default EnergyChart;
