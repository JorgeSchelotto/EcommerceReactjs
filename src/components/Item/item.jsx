import React from 'react';
import { Card, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';







export default function Item({product}){
    return(


            <Card style={{ width: '18rem', margin: '1em' }}>
                <Card.Img variant="top" src="https://via.placeholder.com/150x100.png" />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                    <Link to="/item/:id"><Button variant="primary">Show Detail!</Button></Link>
                </Card.Body>
            </Card>



    )
};