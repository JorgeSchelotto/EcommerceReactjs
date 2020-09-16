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

      <p>
        {cacheSize > 0 ? (
          cache.map(p => <div><span> {p.item.title} Cantidad: {p.total} </span></div>)

        ) : (
            <strong>No se cargaron productos al carrito. </strong>
          )}
      </p>

    </>
  )
}


export default function Cart() {


  return (
    <Container>
      <Row>
        <Col xs={12} md={12}>
          <h1>Carrito de compras</h1>
          <CacheView />
        </Col>
        <Col>
          <CheckOutForm/>
        </Col>
      </Row>
      <Link to="/">
          <button> Volver </button>
        </Link>
    </Container>
  );
}
