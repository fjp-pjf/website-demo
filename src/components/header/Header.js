import React from "react";
import { Row, Col } from "react-bootstrap";
import Navbar from "../navbar/Navbar";
import "./header.scss";

const Header = () => {
  return (
    <>
      <Row className="header mx-0">
        <Col className="header-helpline">Alba helpline: 0000 11111</Col>
        <Col className="header-options">
          <div>Login</div>
          <div>Register</div>
        </Col>
      </Row>

      <Navbar />
    </>
  );
};

export default Header;
