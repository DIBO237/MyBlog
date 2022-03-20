import React from "react";
import "../App.css";
import { Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function Details() {
  return (
    <div>

      <Container  style={{ marginTop: 20, color: "white", maxWidth: 1000 }}>
         <div>
            <h1 style={{fontWeight:"Bold"}}>How To Accept Payments With Stripe</h1>
            <p style={{ color: "#a5a5a5" }}>July 26, 2021</p>
         </div>
         <div className="mt-5">
           <p >So you just created an amazing application and now you need to actually get paid for it but you have no idea where to start. That is perfect because in this article I will show you step by step how to setup Stripe with Node.js and accept payments through this beautiful UI.</p>
            
         </div>
         
      </Container>
    </div>
  )
}
