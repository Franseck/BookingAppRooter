import React from 'react'
import { Container } from 'react-bootstrap'
import notFound from "../assets/GO.jpg"
import { useNavigate } from 'react-router-dom'


const NotFound = () => {
const navigate =useNavigate()


  return (
    <Container className="text-center">
      <img src={notFound} alt="" width="450px" />

     <hr />
        <button onClick={()=>navigate("/")} className="btn btn-info">Nothing here ! Go  Home</button>
    
    </Container>
  );
}

export default NotFound