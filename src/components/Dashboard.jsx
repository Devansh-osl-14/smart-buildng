import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import Header from "./Header";
import "../components/Dashboard.css";
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
  const [ap2, setAp2] = useState(33);
  const [ap10, setAp10] = useState(66);
  const [currTemp, setCurrTemp] = useState(25);
  const [currhumid, setCurrhumid] = useState(66);
  const [currPre, setCurrPre] = useState(123);
  const [p1, setP1] = useState(33);
  const [p2, setP2] = useState(56);
  const [p3, setP3] = useState(65);
  const [car, setCar] = useState(56);
  const [scooter, setScooter] = useState(80);
  const [waterUse, setWaterUse] = useState(700);
  console.log(ap2);
  const productionData = [
    [
      { label: "January", value: 100 },
      { label: "February", value: 150 },
      { label: "March", value: 200 },
    ],
    [
      { label: "January", value: 100 },
      { label: "February", value: 250 },
      { label: "March", value: 160 },
    ],
    [
      { label: "January", value: 60 },
      { label: "February", value: 350 },
      { label: "March", value: 100 },
    ],
    [
      { label: "January", value: 160 },
      { label: "February", value: 90 },
      { label: "March", value: 70 },
    ],
    [
      { label: "January", value: 55 },
      { label: "February", value: 120 },
      { label: "March", value: 230 },
    ],
  ];

  const consumptionData = [
    [
      { label: "January", value: 80 },
      { label: "February", value: 120 },
      { label: "March", value: 180 },
    ],
    [
      { label: "January", value: 60 },
      { label: "February", value: 350 },
      { label: "March", value: 100 },
    ],
    [
      { label: "January", value: 160 },
      { label: "February", value: 90 },
      { label: "March", value: 70 },
    ],
    [
      { label: "January", value: 100 },
      { label: "February", value: 50 },
      { label: "March", value: 90 },
    ],
    [
      { label: "January", value: 220 },
      { label: "February", value: 90 },
      { label: "March", value: 160 },
    ],
  ];

  const temp = [
    [
      { label: "Monday", value: 26 },
      { label: "Tuesday", value: 32 },
      { label: "Wednesday", value: 33 },
    ],
    [
      { label: "Monday", value: 22 },
      { label: "Tuesday", value: 36 },
      { label: "Wednesday", value: 25 },
    ],
    [
      { label: "Monday", value: 15 },
      { label: "Tuesday", value: 22 },
      { label: "Wednesday", value: 12 },
    ],
    [
      { label: "Monday", value: 23 },
      { label: "Tuesday", value: 36 },
      { label: "Wednesday", value: 33 },
    ],
    [
      { label: "Monday", value: 40 },
      { label: "Tuesday", value: 23 },
      { label: "Wednesday", value: 33 },
    ],
  ];

  const humidity = [
    [
      { label: "Monday", value: 80 },
      { label: "Tuesday", value: 55 },
      { label: "Wednesday", value: 92 },
    ],
    [
      { label: "Monday", value: 20 },
      { label: "Tuesday", value: 55 },
      { label: "Wednesday", value: 96 },
    ],
    [
      { label: "Monday", value: 36 },
      { label: "Tuesday", value: 56 },
      { label: "Wednesday", value: 85 },
    ],
    [
      { label: "Monday", value: 63 },
      { label: "Tuesday", value: 45 },
      { label: "Wednesday", value: 50 },
    ],
    [
      { label: "Monday", value: 60 },
      { label: "Tuesday", value: 80 },
      { label: "Wednesday", value: 45 },
    ],
  ];

  let ranArrNo = 0;
  const ranNum = () => {
    // console.log("fgdf");
    ranArrNo = Math.floor(Math.random() * 4 + 0);
    let ranNum1 = 0;
    ranNum1 = Math.floor(Math.random() * 100 + 1);
    setAp2(ranNum1);
    let ranNum2 = 0;
    ranNum2 = Math.floor(Math.random() * 100 + 1);
    setAp10(ranNum2);
    let ranTemp = 0;
    ranTemp = Math.floor(Math.random() * 50 + 1);
    setCurrTemp(ranTemp);
    let ranhumid = 0;
    ranhumid = Math.floor(Math.random() * 100 + 1);
    setCurrhumid(ranhumid);
    let ranPre = 0;
    ranPre = Math.floor(Math.random() * 400 + 1);
    setCurrPre(ranPre);
    let ranP1 = 0;
    ranP1 = Math.floor(Math.random() * 100 + 1);
    setP1(ranP1);
    let ranP2 = 0;
    ranP2 = Math.floor(Math.random() * 100 + 1);
    setP2(ranP2);
    let ranP3 = 0;
    ranP3 = Math.floor(Math.random() * 100 + 1);
    setP3(ranP3);
    let ranCar = 0;
    ranCar = Math.floor(Math.random() * 100 + 1);
    setCar(ranCar);
    let ranScooter = 0;
    ranScooter = Math.floor(Math.random() * 100 + 1);
    setScooter(ranScooter);
    let ranWater = 0;
    ranWater = Math.floor(Math.random() * 1000 + 1);
    setWaterUse(ranWater);
  };

  useEffect(() => {
    const abc = setInterval(() => {
      ranNum();
    }, 5000);
    return () => clearInterval(abc);
  }, []);
  const waterUsageData = [
    [
      { label: 1, data: 100 },
      { label: 2, data: 200 },
      { label: 3, data: 300 },
    ],
    [
      { label: 1, data: 150 },
      { label: 2, data: 220 },
      { label: 3, data: 500 },
    ],
    [
      { label: 1, data: 120 },
      { label: 2, data: 230 },
      { label: 3, data: 160 },
    ],
    [
      { label: 1, data: 170 },
      { label: 2, data: 220 },
      { label: 3, data: 330 },
    ],
    // Add more data as needed
  ];
  const airPollutionArr = [
    [
      { label: "Monday", data: 50 },
      { label: "Tuesday", data: 30 },
      { label: "Wednesday", data: 60 },
    ],
    [
      { label: "Monday", data: 80 },
      { label: "Tuesday", data: 35 },
      { label: "Wednesday", data: 55 },
    ],
    [
      { label: "Monday", data: 56 },
      { label: "Tuesday", data: 36 },
      { label: "Wednesday", data: 20 },
    ],
    [
      { label: "Monday", data: 60 },
      { label: "Tuesday", data: 56 },
      { label: "Wednesday", data: 45 },
    ],
    [
      { label: "Monday", data: 56 },
      { label: "Tuesday", data: 78 },
      { label: "Wednesday", data: 23 },
    ],
  ];

  return (
    <>
      <Header />
      <Box bgcolor={"#000E1D"} height={"auto"} width={"100%"}>
        <Grid container>
          <Current temp={currTemp} humid={currhumid} press={currPre} />
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
              className="d-flex justify-content-end"
            >
              <Grid item lg={3} md={4} xs={12}>
                <h3 className="font-grey">Parking Availability : </h3>
              </Grid>
              <Grid item lg={8} md={8} xs={12}>
                <Grid container columnGap={2}>
                  <Grid item xs={3.5} className="text-center">
                    <Box className="border border-1 border-light rounded-1">
                      <Box className="d-flex justify-content-center gap-3">
                        <FaCar
                          size={20}
                          color="#1E8FFF"
                          // className="m-1"
                          style={{ marginTop: "4%" }}
                        />
                        <Box className="font-grey mt-2">P-1</Box>
                      </Box>
                      <h3 className="text-center mt-1 mb-0">{p1}%</h3>
                    </Box>
                  </Grid>
                  <Grid item xs={3.5} className="text-center">
                    <Box className="border border-1 border-light rounded-1">
                      <Box className="d-flex justify-content-center gap-3">
                        <FaCar
                          size={20}
                          color="#1E8FFF"
                          style={{ marginTop: "4%" }}
                        />
                        <Box className="font-grey mt-2">P-2</Box>
                      </Box>
                      <h3 className="text-center mt-1 mb-0">{p2}%</h3>
                    </Box>
                  </Grid>
                  <Grid item xs={3.5} className="text-center">
                    <Box className="border border-1 border-light rounded-1 ">
                      <Box className="d-flex justify-content-center gap-3">
                        <FaCar
                          size={20}
                          color="#1E8FFF"
                          style={{ marginTop: "4%" }}
                        />
                        <Box className="font-grey mt-2">P-3</Box>
                      </Box>
                      <h3 className="text-center mt-1 mb-0">{p3}%</h3>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container lg={12}>
            <Tooltip
              title="If PM2.5 is more than 50, it is a good day to breathe. If PM10 is more than 50, it is a bad day to breathe."
              arrow
            >
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
                <h4 className="mt-3 mb-4 font-grey">Vehicle Count:</h4>
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
                      // textAlign={"center"}
                      // display={"flex"}
                      // my={"auto"}
                      // justifyContent={"center"}
                      // gap={2}
                      height={"fit-content"}
                      textAlign={"center"}
                      display={"flex"}
                      justifyContent={"center"}
                      gap={2}
                    >
                      <FaCar size={25} color="#1E8FFF" />
                      <h4>Car</h4>
                    </Box>
                    <h2>{car}</h2>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={5}
                    className="text-center"
                    padding={2}
                    border={2}
                    {...{ marginTop: { md: 0, xs: 5 } }}
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
                    <h2>{scooter}</h2>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>

          <Grid
            container
            lg={6.5}
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
            lg={4.5}
            md={12}
            bgcolor={"#051527"}
            // height={"auto"}
            margin={3}
            marginTop={1}
          >
            <Grid
              container
              lg={12}
              xs={12}
              width={"fit-content"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Grid item lg={12} className="mt-3 text-center">
                <h3 className="font-grey mt-1" >Water Level</h3>
              </Grid>
              <Grid item lg={6} className="text-center">
                <Box width={"100%"} height={"90%"}>
                  <DoughnutChart totalCapacity={1000} waterUsed={waterUse} />{" "}
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            lg={5.5}
            md={12}
            bgcolor={"#051527"}
            height={"auto"}
            margin={3}
          >
            <h3 className="font-grey mt-1 mx-auto">Tempreature and Humidity</h3>

            <LineChart
              data1={temp}
              data2={humidity}
              labelX={"Temp"}
              labelY={"Humidity"}
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
            <h3 className="font-grey text-center mt-1 mx-auto">
              Air Pollution
            </h3>

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
