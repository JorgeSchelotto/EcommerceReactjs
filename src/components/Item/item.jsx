import React from 'react';
import { CardRow, Card, Button } from 'react-bootstrap';





export default function Item({product}){
    return(



            <Card style={{ width: '18rem', margin: '1em' }}>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                    <Button variant="primary">Buy Me!</Button>
                </Card.Body>
            </Card>




    )
};