import React from 'react';
import './itemList.css';
import Item from '../Item/item';
import { Container, Row , Col} from 'react-bootstrap';


export default function ItemList({products}){

    return (
        
        <Container>
        <Row>
        <Col>
        <div>
            {products.map(p => <><Item key={p.id} product={p} /> </>)}
        </div>
        </Col>
        </Row>
        </Container>
        
    )
}

