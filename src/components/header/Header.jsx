import React from 'react'
import { Carousel } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import palm from "../../assets/book.jpeg"
import hk from "../../assets/hm.jpg"
import bg from "../../assets/bg.jpeg"
import "../../components/header/header.scss"
import alone from "../../assets/palmalone.png"
import HeaderLast from './HeaderLast';
import {Button} from 'react-bootstrap';

const Header= ()=>  {
  return (
    <div className='container1 text-center'>
      <div className='palmli'>
         <img src={alone} alt="" width={300}/>
            <Carousel className='car'  fade autoPlay={true} interval={3000}>
      <Carousel.Item className='pic'>
        <img className="carimg" src={palm} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="carimg" src={hk} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="carimg" src={bg} alt="" />
      </Carousel.Item>
    </Carousel>
    <img src={alone} alt="" width={300}/>
    </div>
    <Button><NavLink
            className="vacaya"
              to="/Vacay"
                          >
            Let's Book a Vacation 
            </NavLink></Button>
    
 
<HeaderLast/>
            </div>
      );
    };


export default Header;
