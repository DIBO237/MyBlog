import React, { useEffect, useState } from "react";
import "../App.css";
import { Button, Container,Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import axios from "axios";
import {Helmet} from "react-helmet";


export default function Details() {
  const params = useParams()
  console.log(params)
  const [data, setData] = useState(null);
  const [dates,getDate]= useState(null)

  const getData = async (params) => {
    await axios.get(`https://dibyo-blog.herokuapp.com/dibyo/live/${params}`).then((item) => {
      console.log(item.data);
      setData(item.data);
    });
  };
   useEffect(()=>{
      getData(params.id)
      
   },[])
   
  return (

 
    <div>
      { data !== null ?
      
       
      <Container  style={{ marginTop: 20, color: "white", maxWidth: 1000 }}>
        
         <div>
         <Helmet>
           <title>{data.title} </title>
                <meta name="title" content={data.title}  />
                <meta name="description" content={data.description} />
                <meta name="keywords" content="Blog , html ,css , python , nodjs, react , javascript , native" />
                <meta name="robots" content="index, follow" />
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <meta name="author" content="dibyo dey" />

                 
                <link rel="canonical" href="http://mysite.com/example" />
       </Helmet>
            <h1 style={{fontWeight:"Bold"}}>{data.title}</h1>
            <p style={{ color: "#a5a5a5" }}>{new Date(data.created_At).toDateString()}</p>
         </div>
         <div className="mt-5">
         <div dangerouslySetInnerHTML={{ __html: data.content }}>

            </div>
            
         </div>
         
      </Container>
      :  <center > <Spinner animation="grow" variant="light" size={"lg"}>
                       <span className="visually-hidden" style={{color:"white"}}>Loading...</span>
                    </Spinner></center> }
    </div>
  )
}
