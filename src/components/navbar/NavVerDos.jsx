import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


import logo from './assets/logoExtremo.png';

import CartIcon from './CartIcon';
 
import './navbar.css';



export default function NavDos({ categories }) {
  return (
    <>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Link to="/">
          <Navbar.Brand>
            <img
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
            <Nav.Link >Nosotrxs</Nav.Link>
            <Nav.Link as={Link} to={"/"} >Productos</Nav.Link>
            <NavDropdown title="Categorias" id="collasible-nav-dropdown" variant="secondary">
              {categories.map(cat =>  <NavDropdown.Item as={Link} to={`/categorie/${cat.categoryid}`} key={cat.categoryid}>{cat.categoryid}</NavDropdown.Item>)}
            </NavDropdown>
          </Nav>
          <Nav>
            <Navbar.Brand >
              <Link to="/shoppingCart"><CartIcon/></Link>
            </Navbar.Brand>
            <Button variant="outline-secondary"
            style={ { margin: '.25em' }}
            >Login</Button>
            <Button variant="outline-secondary"
            style={ { margin: '.25em' }}
            >Register</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}


