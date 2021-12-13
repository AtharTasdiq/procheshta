import React from 'react';
import "./NavBar.css";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from "../../images/logo1.png";

const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/"><img src={logo} alt="logo"></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>

                    <NavLink className="mx-2 text-light text-decoration-none fs-5" to="/">Home</NavLink>
                        <NavLink className="mx-2 text-light text-decoration-none fs-5" to="/dashboard">Dashboard</NavLink>
                        <NavLink className="mx-2 text-light text-decoration-none fs-5" to="/about-us">About Us</NavLink>
                        <NavLink className="mx-2 text-light text-decoration-none fs-5" to="/campaigns">Campaigns</NavLink>
                        <NavLink className="mx-2 text-light text-decoration-none fs-5" to="/donation">Donate Now!</NavLink>
                        <NavLink className="mx-2 text-light text-decoration-none fs-5" to="/contact">Contact</NavLink>

                        <NavLink className="mx-2 btn btn btn-light" to="/login">Login</NavLink>
                    
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
    );
};

export default NavBar;