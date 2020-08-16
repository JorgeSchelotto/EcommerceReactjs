import React, {useState, useEffect} from 'react';
import Title from '../components/title';
import Link from '../components/link';
import Counter from "../components/Count/Counter";
import {Container, Row, Col} from 'react-bootstrap';



function Home({link, title, subtitle}){
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


    function onAddTotal(count){
        setTotal( (total + count) >= max ? total = max : total + count)
    }

    return (
        <>
        <Container>
        <Row>
        <Col md={{ span: 6, offset: 4 }} xs={{ span: 10, offset: 2 }}>
            <Title style={{margin: "auto" }} title={title} subtitle={subtitle} />
            <Link style={{margin: "auto" }} link={link} />
            <div>
                <Counter
                    initial={1}
                    min={min}
                    max={max}
                    onAdd={onAddTotal}
                    total={total}
                />
            </div>
            <p style={{margin: "auto" }}>{total} {(total >= 20).toString()} </p>
        </Col>
        </Row>
        </Container>
        </>

    )


}

export default Home;