import React from 'react'
import { Carousel } from 'react-bootstrap';

import palm from "../../assets/book.jpeg"
import hk from "../../assets/hm.jpg"
import bg from "../../assets/bg.jpeg"
import "../../components/header/header.scss"

const Header= ()=>  {
  return (
    <div className='container1 text-center'>
         
            <Carousel className='car'  fade autoPlay={true} interval={3000}>
      <Carousel.Item>
        <img className="w-50" src={palm} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="w-50" src={hk} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="w-50" src={bg} alt="" />
      </Carousel.Item>
    </Carousel>
   <h2>Let's get lost </h2>
            </div>
      );
    };


export default Header;
