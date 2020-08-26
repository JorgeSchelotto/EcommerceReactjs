import React, { useState, useEffect } from 'react';
import Title from '../components/title';
import Counter from "../components/Count/Counter";
import items from '../components/ItemList/mockProducts';
import ItemList from '../components/ItemList/ItemList';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import { Container, Row, Col } from 'react-bootstrap';



function Home({ link, title, subtitle }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
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

    useEffect(() => {
        const promProducts = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(items);
            }, 1000);
          });

        promProducts.then(resolve => {
        setProducts(resolve); 
        setLoading(false); 
        });


    }, []);


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
                <Col>
                    {loading && <p>Loading...</p>}
                    <ItemList products={products} />
                    <ItemDetailContainer products={products} />
                </Col>
                </Row>

                <Row>
                <Col xs={10} md={5}>
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