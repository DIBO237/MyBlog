import React, { useEffect, useState } from "react";
import "../App.css";
import { Button, Container, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";

export default function Home() {
  const [data, setData] = useState(null);
  const getData = () => {
    axios.get("https://dibyo-blog.herokuapp.com/dibyo/blog").then((item) => {
      console.log(item.data);
      setData(item.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Container style={{ marginTop: 20, color: "white", maxWidth: 1000,textDecoration:"none" }}>
        {data !== null ? (
          data.map((item) => (
            <div>
              <Link to={`/details/${item.url_link}` } style={{textDecoration:"none"}}>
              <h1
                className="mt-5"
                style={{ color: "white", fontWeight: "bold" }}
              >
                {item.title}
              </h1></Link>
              <p style={{ color: " #a5a5a5 " }}>
                {new Date(item.created_At).toDateString()}
              </p>
              <h5>{item.description}</h5>
              <Link to={`/details/${item.url_link}`}>
                <h5 style={{ fontStyle: "none" }}>Read More</h5>
              </Link>
              <hr style={{ marginTop: 40 }} />
            </div>
          ))
        ) : (
          <center>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </center>
        )}
      </Container>
    </div>
  );
}
