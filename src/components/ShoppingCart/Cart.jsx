import React, { useEffect } from "react";
import "./Cart.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/cartContext";
import CheckOutForm from '../CheckOutForm/CheckOutForm';






export function CacheView() {
  const { cache, cacheSize } = useCartContext()

  useEffect(() => {

  }, [cache])


  return (

    <>
        {cacheSize > 0 ? (
          cache.map(p => <div key={p.item.id + p.item.title}><span> {p.item.title} Cantidad: {p.total} </span></div>)
        ) : (
            <strong>No se cargaron productos al carrito. </strong>
          )}

    </>
  )
}


export default function Cart() {

  const { cache, cacheSize } = useCartContext()


  useEffect(() => {
    console.log("Receiving new cache")

  }, [cache])



  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={12}>
          <h1>Carrito de compras</h1>
          <CacheView />
        </Col>
        <Col xs={12} md={8}>
        { cacheSize > -1 ?
          <CheckOutForm/> : ''}
          <Link to="/">
          <button> Volver </button>
        </Link>
        </Col>
      </Row>
    </Container>
  );
}
