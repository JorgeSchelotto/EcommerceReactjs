import React, { useState, useEffect } from 'react';
import Title from '../components/title';
import Link from '../components/link';
import Counter from "../components/Count/Counter";
import products from '../components/ItemList/mockProducts';
import ItemList from '../components/ItemList/ItemList';
import { Container, Row, Col } from 'react-bootstrap';



function Home({ link, title, subtitle }) {
    let [total, setTotal] = useState(0);
    const min = 1;
    const max = 20

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
            <Container>
                <Row className="justify-content-md-center">
                    <Title style={{ margin: "auto" }} title={title} subtitle={subtitle} />
                </Row>
                <Row>
                    
                <Col xs={12} md={7}>
                        <ItemList products={products} />
                    </Col>
                    <Col xs={12} md={5}>
                        <div>
                            <Counter
                                initial={1}
                                min={min}
                                max={max}
                                onAdd={onAddTotal}
                                total={total}
                            />
                        </div>
                        <p style={{ margin: "auto" }}>{total} {(total >= 20).toString()} </p>
                    </Col>
                </Row>
            </Container>
        </>

    )


}

export default Home;