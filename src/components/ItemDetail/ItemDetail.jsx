import React, { useState, useEffect } from 'react';
import './ItemDetail.css';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import Counter from '../Count/Counter';
import { useCartContext, CacheProvider } from '../../Context/cartContext';




export default function ItemDetail({ product }) {
    const {cache, addToCache, isInCache, cacheSize, cleanCache} = useCartContext();
    let [total, setTotal] = useState(0);
    const min = 1;
    const max = product.stock
    useEffect(() => {
        if (total > min) {
            console.log(`Threshold of over ${min} reached.`);
        } else {
            console.log('No threshold reached.');
        }

        return ( window.stopPropagation )

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
                        style={{ margin: 'auto' }}
                    >
                        <p>Nombre: {product.name}</p>
                        <p>Stock: {product.stock}</p>
                        <p>Descripcion: {product.description}</p>
                    </div>

                    <div>
                        <p>
                            <span>Total </span>
                            <span>{total ? total : ''}</span>
                        </p>
                        <CacheProvider value={[]}>
                            <Link to="/shoppingCart">
                                <button onClick={alert(product.name, total)}> COMPRAR </button>
                            </Link>
                        </CacheProvider>

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

                </Col>
            </Row>

        </>

    )
}
