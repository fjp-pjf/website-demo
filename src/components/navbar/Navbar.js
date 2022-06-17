import React from "react";
import { Col, Row } from "react-bootstrap";
import DropdownList from "../dropdown/DropdownList";
import "./navbar.scss";

const Navbar = () => {
  return (
    <>
      <Row className="navbar mx-0">
        <Col lg={3} className="navbar-logo">
          Logo
        </Col>
        <Col lg={6} className="navbar-dropdowns">
          <p>HOME</p>
          <DropdownList title="MEN" />
          <DropdownList title="WOMEN" />
          <DropdownList title="GIRLS" />
          <DropdownList title="BOYS" />
        </Col>
        <Col lg={3} className="navbar-cart">
          cart
        </Col>
      </Row>
    </>
  );
};

export default Navbar;
