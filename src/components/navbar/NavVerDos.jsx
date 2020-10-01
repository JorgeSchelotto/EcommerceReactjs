import React, {useState,useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { getFirestore } from '../../firebase/index';


import logo from './assets/logoExtremo.png';

import CartIcon from './CartIcon';
 
import './navbar.css';



export default function NavDos() {

  const [categories, setCategories] = useState([]);


    useEffect(() => {
        
        const db = getFirestore();
        const itemCollection =  db.collection("items"); 
        let query = itemCollection ;
        

        query.get().then((querySnapshot) => {
            if (querySnapshot.size === 0){
                console.log('No results!');
                return
            }

            console.log('Item Found!');
            const items = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
            setCategories([...new Set(items.map(item => item.categoryid))]);

        }).catch((error) => {
            console.log("Error searching items: ", error)
        })

    }, []);


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
              {categories.map(cat =>  <NavDropdown.Item as={Link} to={`/categorie/${cat}`} key={cat}>{cat}</NavDropdown.Item>)}
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


