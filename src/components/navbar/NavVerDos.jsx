import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Link, NavLink } from 'react-router-dom';

import logo from './assets/logoExtremo.png'
import { Cart3 } from 'react-bootstrap-icons';
 
import './navbar.css';



export default function NavDos() {
  return (
    <>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Link to="/">
          <Navbar.Brand 
            href="#home"><img
            src={logo}
            style={{ maxWidth: 120 }}
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Nosotrxs</Nav.Link>
            <Nav.Link href="#pricing">Productos</Nav.Link>
            <NavDropdown title="Categorias" id="collasible-nav-dropdown" variant="secondary">
              <NavDropdown.Item href="#action/3.1">Remeras</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Busos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Camperas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Gorras</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Navbar.Brand href="#home">
              <Link to="/shoppingCart"><Cart3 color="gray" disabled /></Link>
            </Navbar.Brand>
            <Button variant="outline-secondary">Login</Button>
            <Button variant="outline-secondary">Register</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}


