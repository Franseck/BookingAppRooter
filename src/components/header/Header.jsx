import React from 'react'
import { Carousel } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import palm from "../../assets/book.jpeg"
import hk from "../../assets/hm.jpg"
import bg from "../../assets/bg.jpeg"
import res from "../../assets/2.jpg"
import book from "../../assets/book.jpeg"
import filip from "../../assets/3.jpg"
import "../../components/header/header.scss"
import alone from "../../assets/palmalone.png"
import HeaderLast from './HeaderLast';



const Header= ()=>  {
  return (
    <div className='container1 text-center'>
      <div className='palmli'>
         <img src={alone} alt="" width={300}/>
            <Carousel className='car'  fade autoPlay={true} interval={1500}>
      <Carousel.Item className='pic'>
        <img className="carimg" src={palm} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="carimg" src={hk} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="carimg" src={bg} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="carimg" src={book} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="carimg" src={filip} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="carimg" src={res} alt="" />
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
