import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import logo from "../image/love.png";

const Header = function () {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" type="light">
            <Container>
                <img src={logo} className="App-logo" alt="logo"/>
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Events" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;