import React from 'react';
import { CardColumns, Card, Button } from 'react-bootstrap';





export default function Item({product}){
    return(


        <CardColumns>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                    <Button variant="primary">Buy Me!</Button>
                </Card.Body>
            </Card>
        </CardColumns>



    )
};