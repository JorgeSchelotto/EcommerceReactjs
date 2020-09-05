import React from "react";
import "./Cart.css";
import { Container, Row, Col } from "react-bootstrap";

import { useCartContext, CacheProvider } from "../../Context/cartContext";

export default function Cart() {
  const { cache, cacheSize } = useCartContext();

  return (
    <Container>
      <Row>
        <Col xs={10} md={5}>
          <h1>Carrito de compras</h1>
          <CacheProvider>
            {cache ? (
              <p> Total: {cache.product.name}</p>
            ) : (
              <strong>No se cargo nada al carrito. items: {cacheSize} </strong>
            )}
          </CacheProvider>
        </Col>
      </Row>
    </Container>
  );
}
