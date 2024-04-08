import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "./Logo/Logo";

const Header = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#051527" }}>
      <Container fluid>
        <Navbar.Brand href="#home">
          {" "}
          <Logo />
        </Navbar.Brand>
        <Nav className="mx-auto">
          <h3
            // color={"red"}
            fontWeight={"550"}
            className="text-resp"
            // textAlign={"center"}
            // color={"red"}
            // fontFamily={"monospace"}
            // fontSize="12px"
            style={{
              color: "#b42929",
            }}
          >
          </h3>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
