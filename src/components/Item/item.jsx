import React from 'react';
import { Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';







export default function Item({product}){
    return(
            <>
            <Card style={{ margin: '1em .5em 1em .5em ' }}>
                <Card.Img variant="top" src="https://via.placeholder.com/150x100.png" />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                    <Link to={`/item/${product.id}/detail`}><Button variant="primary">Show Detail!</Button></Link>
                </Card.Body>
            </Card>

            </>
    )
};