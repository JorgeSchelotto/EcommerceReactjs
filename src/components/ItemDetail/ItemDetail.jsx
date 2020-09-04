import React, { useState, useEffect } from 'react';
import './ItemDetail.css';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import Counter from '../Count/Counter';
import { cartContext, useCarteContext } from '../../Context/cartContext';

function PruebaContex(){
    const name = useCarteContext();
    console.log(name)
    return (
    <p> Hello {name} </p>
    
    )
}


export default function ItemDetail({product}){

    let [total, setTotal] = useState(0);
    const min = 1;
    const max = product.stock
    useEffect(() => {
        if (total > min) {
            console.log(`Threshold of over ${min} reached.`);
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
                    <p> 
                        <span>Total </span> 
                        <span>{total ? total : '' }</span>
                    </p>
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
                </div>
                <cartContext.Provider value={total}>
                    <PruebaContex />
                </cartContext.Provider>
            </Col>
        </Row>

        </>
        
    )
}
