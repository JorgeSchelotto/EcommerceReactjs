import React from 'react';
import './itemList.css';
import Item from '../Item/item';
import { Container, Row, CardColumns } from 'react-bootstrap';




export default function ItemList({products}){

    return (
        
        <Container>
            <Row>
                <CardColumns md={5} xs={11}>
                    {products.map(
                        p => 
                        <>     
                        
                            {/* <Col md={4} xs={12}>  */}
                            
                                <Item key={p.id} product={p} />
                            
                            {/* </Col> */}
                        
                        </>
                    )}
                </CardColumns>
            </Row>
        </Container>
        
    )
}

