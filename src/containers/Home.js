import React, { useState, useEffect } from 'react';
import Title from '../components/title';
import items from '../components/ItemList/mockProducts';
import ItemList from '../components/ItemList/ItemList';
// import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import { Container, Row, Col } from 'react-bootstrap';



function Home({ link, title, subtitle }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        const promProducts = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(items);
            }, 3000);
          });

        promProducts.then(resolve => {
        setProducts(resolve); 
        setLoading(false); 
        });


    }, []);





    return (
        <>
            <Container>
                <Row className="justify-content-md-center">
                    <Title style={{ margin: "auto" }} title={title} subtitle={subtitle} />
                </Row>

                <Row>
                    <Col>
                        <div>
                            {loading && <p>Loading...</p>}
                            <ItemList products={products} />
                            {/* <ItemDetailContainer /> */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </>

    )


}

export default Home;