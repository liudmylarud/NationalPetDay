import React from "react";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

const NavMenu = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Cactus</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#galery">Galery</Nav.Link>
                    <Nav.Link href="/my-page">My Page</Nav.Link>
                </Nav>
                <Nav>
                    <NavDropdown title="Login/Register" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                        <NavDropdown.Item href="/register">Register</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavMenu;