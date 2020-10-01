import React from 'react';
import { Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';







export default function Item({product}){
    return(
            <>
            <Card style={{ margin: '1em .5em 1em .5em ' }}>
                <Card.Img variant="top" src={require(`../../assets/image/${product.imageid}`)} 
                fluid={true}/>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                    <Link to={`/item/${product.id}/detail`}><Button variant="primary">Show Detail!</Button></Link>
                </Card.Body>
            </Card>

            </>
    )
};