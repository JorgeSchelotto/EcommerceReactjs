import React from 'react';
import './Cart.css';
import { Container, Row, Col } from 'react-bootstrap';

import { cartContext, useCarteContext } from '../../Context/cartContext';






export default function Cart(){

    const total = useCarteContext();

    return (
        

        <Container>
            <Row>
                <Col xs={10} md={5}>
                    <h1>Carrito de compras</h1>
                    <cartContext.Provider>
                    <p>Total: {total}</p> 
                    </cartContext.Provider>
                </Col>
            </Row>
        </Container>
        
    )
}

