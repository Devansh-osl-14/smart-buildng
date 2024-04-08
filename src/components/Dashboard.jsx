import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import Header from "./Header";
import { Display } from "react-7-segment-display";
import { FaTemperatureHigh } from "react-icons/fa6";
import { IoIosWater } from "react-icons/io";
import GaugeChart from "react-gauge-chart";
import "../components/Dashboard.css";
import { ImMeter2 } from "react-icons/im";
import GaugeComponent from "react-gauge-component";
import LineChart from "./Chart/LineChart";
import Current from "./Current/Current";
import EnergyChart from "./EnergyChart/EnergyChart";
import { FaCar } from "react-icons/fa";
import { GiScooter } from "react-icons/gi";
import DoughnutChart from "./Chart/DoughnutChart";
import Tooltip from "@mui/material/Tooltip";
import BarChart from "./Chart/Barchart";
const Dashboard = () => {
  const [ap2, setAp2] = useState();
  const [ap10, setAp10] = useState();
  console.log(ap2);
  const productionData = [
    { label: "January", value: 100 },
    { label: "February", value: 150 },
    { label: "March", value: 200 },
  ];

  const consumptionData = [
    { label: "January", value: 80 },
    { label: "February", value: 120 },
    { label: "March", value: 180 },
    // Add more data as needed
  ];

  const temp = [
    { label: "Monday", value: 26 },
    { label: "Tuesday", value: 32 },
    { label: "Wednesday", value: 33 },
  ];

  const humidity = [
    { label: "Monday", value: 80 },
    { label: "Tuesday", value: 55 },
    { label: "Wednesday", value: 92 },
    // Add more data as needed
  ];

  const ranNum = () => {
    console.log("fgdf");
    let ranNum1 = 0;
    ranNum1 = Math.floor(Math.random() * 100 + 1);
    setAp2(ranNum1);
  };
  const ranNum2 = () => {
    let ranNum2 = 0;
    ranNum2 = Math.floor(Math.random() * 100 + 1);
    setAp10(ranNum2);
  };

  useEffect(() => {
    const abc = setInterval(() => {
      ranNum();
      ranNum2();
    }, 5000);
    return () => clearInterval(abc);
  }, []);
  const waterUsageData = [
    { label: 1, data: 100 },
    { label: 2, data: 200 },
    { label: 3, data: 300 },
    // Add more data as needed
  ];
  const airPollutionArr = [
    { label: "Monday", data: 50 },
    { label: "Tuesday", data: 30 },
    { label: "Wednesday", data: 60 },
    // Add more data as needed
  ];

  // setInterval(() => {
  //   ranNum();
  //   ranNum2();
  // }, 5000);
  // setInterval(() => {
  // }, 5000);
  const airPollution = 60;
  return (
    <>
      <Header />
      <Box bgcolor={"#000E1D"} height={"auto"} width={"100%"}>
        {/* <Box className="row" padding={4}>
          <Box className="col-6">
            <Box
              className="col-lg-6 col-md-12"
              bgcolor={"#051527"}
              padding={3}
              borderRadius={2}
              display={"flex"}
            >
              <Box width={{ lg: "100%", md: "50%" }}>
                <Box
                  className="border border-light border-2 mb-0"
                  margin={3}
                  mr={0}
                >
                  <Box
                    className="d-flex justify-content-center m-5 mb-0 rounded-2"
                    my={"50%"}
                  >
                    <FaTemperatureHigh className="icon-blue" size={30} />
                    &nbsp;&nbsp;
                    <Box  className="font-grey">
                      <small className="m-0 p-0">TEMPERATURE</small>
                    </Box>
                  </Box>
                  <Box className="d-flex justify-content-center">
                    <Display
                      value={25}
                      height={80}
                      className="icon-blue"
                      className="text-center"
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              className="col-lg-6 col-md-12"
              bgcolor={"#051527"}
              padding={3}
              borderRadius={2}
              display={"flex"}
            >
              <Box width={{ lg: "100%", md: "50%" }}>
                <Box
                  className="border border-light border-2 mb-0  d-flex "
                  margin={3}
                  ml={1}
                >
                  <Box className="d-flex   m-5 mb-0 rounded-2">
                    <IoIosWater color="1E8FFF" size={30} />
                    <Box  className="font-grey">
                      <small className="m-0 p-0">HUMIDITY</small>
                    </Box>
                  </Box>
                  <Box className="d-flex align-items-center">
                    <h3>25</h3>

                    <h3>%</h3>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box> */}
        <Grid container>
          <Current />
          <EnergyChart
            productionData={productionData}
            consumptionData={consumptionData}
          />
          <Grid
            container
            lg={11.35}
            md={12}
            bgcolor={"#051527"}
            height={"auto"}
            margin={3}
            marginTop={1}
          >
            <Grid
              container
              lg={12}
              xs={12}
              padding={2}
              className="d-flex justify-content-center"
            >
              <Grid item lg={3} md={4} xs={12}>
                <h3 className="font-grey">Parking Availability : </h3>
              </Grid>
              <Grid item lg={8} md={8} xs={12}>
                <Grid container>
                  <Grid item xs={4} className="text-center">
                    <Box className="border border-1 border-light rounded-1 w-75 ">
                      <Box className="d-flex justify-content-center gap-3">
                        <FaCar size={20} color="#1E8FFF" />
                        <Box className="font-grey">P-1</Box>
                      </Box>
                      <h3 className="text-center mt-1 mb-0">60%</h3>
                    </Box>
                  </Grid>
                  <Grid item xs={4} className="text-center">
                    <Box className="border border-1 border-light rounded-1 w-75">
                      <Box className="d-flex justify-content-center gap-3">
                        <FaCar size={20} color="#1E8FFF" />
                        <Box className="font-grey">P-2</Box>
                      </Box>
                      <h3 className="text-center mt-1 mb-0">40%</h3>
                    </Box>
                  </Grid>
                  <Grid item xs={4} className="text-center">
                    <Box className="border border-1 border-light rounded-1 w-75">
                      <Box className="d-flex justify-content-center gap-3">
                        <FaCar size={20} color="#1E8FFF" />
                        <Box className="font-grey">P-3</Box>
                      </Box>
                      <h3 className="text-center mt-1 mb-0">20%</h3>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container lg={12}>
            <Tooltip title="If PM2.5 is more than 50, it is a good day to breathe. If PM10 is more than 50, it is a bad day to breathe.">
              <Grid
                container
                lg={5.5}
                md={12}
                bgcolor={"#051527"}
                height={"auto"}
                className="d-flex justify-content-center"
                margin={3}
                marginTop={1}
              >
                <Grid item lg={5.5} padding={2} textAlign={"center"}>
                  <Box>
                    <h4 className="font-grey">Air pollution PM2.5</h4>
                  </Box>
                  <Box>
                    <GaugeComponent
                      arc={{
                        subArcs: [
                          {
                            color: "#1E8FFF",
                          },
                        ],
                      }}
                      value={ap2}
                    />
                  </Box>
                </Grid>
                <Grid item lg={5.5} padding={2} textAlign={"center"}>
                  <Box>
                    <h4 className="font-grey">Air pollution PM10</h4>
                  </Box>
                  <Box>
                    <GaugeComponent
                      arc={{
                        subArcs: [
                          {
                            color: "#1E8FFF",
                          },
                        ],
                      }}
                      value={ap10}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Tooltip>
            <Grid
              container
              lg={5.5}
              md={12}
              bgcolor={"#051527"}
              height={"auto"}
              margin={3}
              marginTop={1}
            >
              <Box className="text-center w-100 p-2">
                <h4 className="mt-3 mb-5 font-grey">Vehicle Count:</h4>
                <Grid
                  container
                  columnGap={5}
                  className="d-flex justify-content-center"
                >
                  <Grid
                    item
                    xs={12}
                    md={5}
                    className="text-center"
                    padding={2}
                    paddingBottom={0}
                    border={2}
                    borderRadius={1}
                  >
                    <Box
                      textAlign={"center"}
                      display={"flex"}
                      my={"auto"}
                      justifyContent={"center"}
                      gap={2}
                    >
                      <FaCar size={25} color="#1E8FFF" />
                      <h4>Car</h4>
                    </Box>
                    <h2>50</h2>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={5}
                    className="text-center"
                    padding={2}
                    border={2}
                    {...{ marginTop: { lg: 0, xs: 5 } }}
                    paddingBottom={0}
                  >
                    <Box
                      height={"fit-content"}
                      textAlign={"center"}
                      display={"flex"}
                      justifyContent={"center"}
                      gap={2}
                    >
                      <GiScooter size={30} color="#1E8FFF" />
                      <h4>Scooter</h4>
                    </Box>
                    <h2>80</h2>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            lg={5.5}
            md={12}
            bgcolor={"#051527"}
            // height={"auto"}
            display={"flex"}
            justifyContent={"center"}
            margin={3}
            marginTop={1}
          >
            <Grid lg={6}>
              <h3 className="font-grey text-center mt-1">Water Level</h3>
              <DoughnutChart totalCapacity={1000} waterUsed={700} />{" "}
            </Grid>
          </Grid>
          <Grid
            container
            lg={5.5}
            md={12}
            bgcolor={"#051527"}
            height={"auto"}
            margin={3}
            marginTop={1}
          >
            <BarChart
              dataObj={waterUsageData}
              indexAxis={"y"}
              label={"Water Usage"}
              labelX={"Water (Liters)"}
              labelY={"Floor"}
            />
          </Grid>
          <Grid
            container
            lg={5.5}
            md={12}
            bgcolor={"#051527"}
            height={"auto"}
            margin={3}
            marginTop={1}
          >
            <LineChart
              data1={temp}
              data2={humidity}
              labelX={"temp"}
              labelY={"humidity"}
            />
          </Grid>
          <Grid
            container
            lg={5.5}
            md={12}
            bgcolor={"#051527"}
            height={"auto"}
            margin={3}
            marginTop={1}
          >
            <BarChart
              indexAxis={"x"}
              dataObj={airPollutionArr}
              label={"Air Pollution"}
              labelX={"AQI"}
              labelY={"Day"}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Dashboard;
