import React from "react";
import { Button, Container, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function Navbas() {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand  >
          <div class="d-flex flex-row shadow-lg" style={{ borderColor:"red",  borderRadius: 10 }}>
            {/* <div class="p-2"><img src="../../public/assets/sample.png" style={{ width: "50px" }} /></div> */}
            <div class="p-2"><p style={{ fontSize: 26, color:" #2b98ff ", fontWeight:"bold" }} >My Dev Blog </p></div>
            
        </div>
           
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}
