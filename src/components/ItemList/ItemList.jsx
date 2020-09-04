import React from 'react';
import './itemList.css';
import Item from '../Item/item';
import { Container, Row, CardColumns } from 'react-bootstrap';




export default function ItemList({products}){

    return (
        
        <Container>
            <Row>
                <CardColumns md={5} xs={12}>

                    {products.map( p =>  <Item key={p.id} product={p} /> )}

                </CardColumns>
            </Row>
        </Container>
        
    )
}

