import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import logo from './assets/logoExtremo.png'
import { Cart3 } from 'react-bootstrap-icons';
 
import './navbar.css';



export default function NavDos() {
  return (
    <>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Navbar.Brand href="#home"><img
          src={logo}
          style={{ maxWidth: 120 }}
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown" variant="secondary">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Navbar.Brand href="#home">
              <Cart3 color="gray" disabled />
            </Navbar.Brand>
            <Button variant="outline-secondary">Login</Button>
            <Button variant="outline-secondary">Register</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}


