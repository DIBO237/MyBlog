import React from "react";
import "../App.css";
import { Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Container style={{ marginTop: 20, color: "white", maxWidth: 1000 }}>
        {[1,2,3,4,5,6,7,8,9,10].map((item)=>(
               <div>
               <h1 className="mt-5" style={{ color: "white", fontWeight: "bold" }}>
                 How To Create A VSCode Snippet
               </h1>
               <p style={{ color: " #a5a5a5 " }}>March 7,2022, By Dibya Dey</p>
               <h5>
                 Snippets are one of the easiest ways to customize your VSCode
                 experience and in this article I will explain everything you need to
                 know about creating your first snippet.
               </h5>
               <Link to="/details/hello">
                 <h5 style={{ fontStyle: "none" }}>Read More</h5>
               </Link>
               <hr style={{ marginTop: 40 }} />
             </div>
        ))}
        
      </Container>
    </div>
  );
}
