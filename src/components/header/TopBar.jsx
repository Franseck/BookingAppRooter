import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/logo.png"

const TopBar = () => {
  return (

    <Navbar  className='navbar' expand="sm" >

      <Container className='top'>
         
        <Link to="/">
          <img className='logopalm' src={logo} alt="" />
        </Link>
          <h1 className='topic'>Book Your Dream Vacay</h1>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="tops" >
            <NavLink
              className="nav-link"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
            className="nav-link"
              to="/Vacay"
                          >
              Book a Vacay
            </NavLink>
               <NavLink
             to="/contact"
              className="nav-link"
            > Contact
            </NavLink>
                        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      
)}

export default TopBar