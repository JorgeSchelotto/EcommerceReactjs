import React from 'react';
import { Card, Body, Img, Text } from 'react-bootstrap/Card';





export default function Item({product}){
    return(

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                    {product.description}
                </Card.Text>
                <Button variant="primary">Buy</Button>
            </Card.Body>
        </Card>

    )
};