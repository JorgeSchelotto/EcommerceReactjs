import React from 'react';
import './itemList.css';
import Item from '../Item/item';
import { Container, Row, Col, CardGroup } from 'react-bootstrap';




export default function ItemList({products}){

    return (
        
        <Container>
            <Row>
                
                    {products.map( p =>  
                        <Col md={4} xs={12}> 
                            <CardGroup>
                                <Item key={p.id} product={p}/>
                            </CardGroup> 
                        </Col> 
                    )}
                
            </Row>
        </Container>
        
    )
}

