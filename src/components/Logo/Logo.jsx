import { Link } from "@mui/material";
import React from "react";
import logo from "./white logo.png";
import RouterLink from "../../components/layout/router-link";
import "./logo.css";

function Logo() {
  return (
    <Link component={RouterLink} href="/">
      <img className="image-fluid logo m-3 " src={logo} />
    </Link>
  );
}

export default Logo;
