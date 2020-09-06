import React from "react";
import "./Cart.css";
import { Container, Row, Col } from "react-bootstrap";

import { useCartContext, CacheProvider } from "../../Context/cartContext";


export function CacheView(){
    const {cache, cacheSize} = useCartContext()


    return (
        <>
            {cacheSize > 0 ? (
                <p> Total: {cacheSize}</p>
            ) : (
                <strong>No se cargo nada al carrito. Items: {cacheSize} </strong>
            )}

        </>
    )
}


export default function Cart() {
  

  return (
    <Container>
      <Row>
        <Col xs={10} md={5}>
          <h1>Carrito de compras</h1>
            <CacheProvider>
                <CacheView/>
            </CacheProvider>
        </Col>
      </Row>
    </Container>
  );
}
