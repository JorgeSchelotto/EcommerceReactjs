import React, { useState, useEffect } from 'react';
import './ItemDetail.css';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import Counter from '../Count/Counter';




export default function ItemDetail({product}){

    let [total, setTotal] = useState(0);
    const min = 1;
    const max = product.stock
    useEffect(() => {
        if (total > 1) {
            console.log('Threshold of over 1 reached.');
        } else {
            console.log('No threshold reached.');
        }
    }, [total]);

    function onAddTotal(count) {
        setTotal((total + count) >= max ? total = max : total + count)
    }
   


    return (
        
        <>
            <Row>
                <Col xs={12} md={8}>
                <Link to="/"> <button> Volver </button> </Link>
                <div
                    style={{ margin:'auto' }}
                >
                    <p>Nombre: {product.name}</p>
                    <p>Stock: {product.stock}</p>
                    <p>Descripcion: {product.description}</p>
                </div>

                <div>
                    <p> Total {total ? total : '' }</p>
                    <Link to="/shoppingCart">
                        <button> COMPRAR </button>
                    </Link>
                </div>
            </Col>

            <Col xs={12} md={4}>
                <div>
                    <Counter
                        initial={1}
                        min={min}
                        max={product.stock}
                        onAdd={onAddTotal}
                        total={total}
                    />
                    
                    <p> {total} </p>
                </div>
            </Col>
        </Row>
        </>
        
    )
}
