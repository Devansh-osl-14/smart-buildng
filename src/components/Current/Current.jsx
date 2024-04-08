import { Box, Grid } from "@mui/material";
import React from "react";
import { Display } from "react-7-segment-display";
import { FaTemperatureHigh } from "react-icons/fa6";
import { ImMeter2 } from "react-icons/im";
import { IoIosWater } from "react-icons/io";

const Current = () => {
  return (
    <Grid
      container
      lg={5.5}
      md={12}
      bgcolor={"#051527"}
      height={"auto"}
      margin={3}
    >
      <Grid item lg={6} xs={12}>
        <Box>
          <Box
            className="border border-light border-2 rounded-2 "
            margin={3}

            // mr={0}
          >
            <Box className="d-flex justify-content-center m-5 mb-0" my={"50%"}>
              <FaTemperatureHigh className="icon-blue" size={30} />
              &nbsp;&nbsp;
              <Box fontWeight={550} color={"#879EBF"}>
                <small className="m-0 p-0">TEMPERATURE</small>
              </Box>
            </Box>
            <Box className="d-flex justify-content-center">
              <Display
                value={25}
                height={80}
                color="#1E8FFF"
                className="text-center"
              />
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid
        container
        lg={6}
        xs={12}
        height={"100%"}
        marginBottom={2}
        columnGap={2}
      >
        <Grid item lg={12} xs={5.7} md={6}>
          <Box
            className="border border-light border-2 rounded-2 "
            // margin={3}
            {...{ marginLeft: { lg: "0%", md: "5%", xs: "12%" } }}
            {...{ marginRight: { lg: "5%" } }}
            // marginRight={1}
            {...{ marginTop: { lg: "10%" } }}
            // marginLeft={0}
            // height={"40%"}
            // mr={0}
          >
            <Box
              className="d-flex justify-content-center m-3 mb-0"
              // my={"50%"}
            >
              <IoIosWater className="icon-blue" size={30} />
              &nbsp;&nbsp;
              <Box fontWeight={550} color={"#879EBF"} width={100}>
                <small className="m-0 p-0">HUMIDITY</small>
              </Box>
            </Box>
            <Box className="d-flex justify-content-center">
              <h3>25</h3>

              <h3>%</h3>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={12} xs={5.7} md={5.77}>
          <Box
            className="border border-light border-2 rounded-2"
            marginLeft={0}
            marginRight={3}

            // height={"40%"}
            // mr={0}
          >
            <Box
              className="d-flex justify-content-center m-3 mb-0"
              // my={"50%"}
            >
              <ImMeter2 className="icon-blue" size={25} />
              &nbsp;&nbsp;
              <Box fontWeight={550} color={"#879EBF"} width={100}>
                <small className="m-0 p-0">PRESSURE</small>
              </Box>
            </Box>
            <Box className="d-flex justify-content-center">
              <h3>160</h3>
              &nbsp;
              <h3>mbar</h3>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Current;
