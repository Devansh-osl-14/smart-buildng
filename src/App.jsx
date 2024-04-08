import "./App.css";
import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CategoryScale, Chart } from "chart.js";
import {
  createRoutesFromElements,
  Route,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import LineChart from "./components/Chart/LineChart";
import DoughnutChart from "./components/Chart/DoughnutChart";
import BarChart from "./components/Chart/Barchart";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  // Chart.register(CategoryScale);
  const productionData = [
    { label: "January", value: 100 },
    { label: "February", value: 150 },
    { label: "March", value: 200 },
    // Add more data as needed
  ];

  const consumptionData = [
    { label: "January", value: 80 },
    { label: "February", value: 120 },
    { label: "March", value: 180 },
    // Add more data as needed
  ];

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );
  const routes = createBrowserRouter(
    createRoutesFromElements([
      <>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/test"
          element={
            // <LineChart
            //   productionData={productionData}
            //   consumptionData={consumptionData}
            // />
            // <DoughnutChart />
            <BarChart/>
          }
        />
      </>,
    ])
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={routes}>
        <ToastContainer />
      </RouterProvider>
    </ThemeProvider>
  );
}

export default App;
