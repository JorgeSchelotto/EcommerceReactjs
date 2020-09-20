import React, { useEffect, useState } from "react";
import "./Cart.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/cartContext";
import CheckOutForm from '../CheckOutForm/CheckOutForm';






export function CacheView() {
  const { cache, cacheSize, price } = useCartContext()

  useEffect(() => {

  }, [cache])


  return (

    <>


        {cacheSize > 0 ? (
          cache.map(p => <div key={p.item.id,p.item.title}><span> {p.item.title} Cantidad: {p.total} </span></div>)
        ) : (
            <strong>No se cargaron productos al carrito. </strong>
          )}

    </>
  )
}


export default function Cart() {

  const { cache, cacheSize, price } = useCartContext()


  useEffect(() => {
    console.log("Receiving new cache")

  }, [cache])



  return (
    <Container>
      <Row>
        <Col xs={12} md={12}>
          <h1>Carrito de compras</h1>
          <CacheView />
        </Col>
        <Col xs={12} md={{span:6, offset: 3}}>
        { cacheSize > -1 ?
          <CheckOutForm/> : <div></div>}
        </Col>
      </Row>
      <Link to="/">
          <button> Volver </button>
        </Link>
    </Container>
  );
}
