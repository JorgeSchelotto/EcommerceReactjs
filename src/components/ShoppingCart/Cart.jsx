import React, { useEffect } from "react";
import "./Cart.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/cartContext";
import Table from 'react-bootstrap/Table'

import CheckOutForm from '../CheckOutForm/CheckOutForm';
import Button from 'react-bootstrap/Button'






export function CacheView() {
  const { cache, cacheSize, deleteElement, price } = useCartContext()

  useEffect(() => {

  }, [cache])


  function deleteElem(p) {
    console.log(p.id)
    deleteElement(p.id);
  }


  return (

    <>


      
        {cacheSize > 0 ? (
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Total</th>
                <th>Quitar</th>
              </tr>
            </thead>
            <tbody>
              {cache.map(p => <tr key={p.item.id + cache.length}>
                <td> {p.item.title}</td>
                <td> {p.total} </td>
                <td> ${p.total * p.item.price}.</td>
                <td> <Button variant="outline-light" onClick={deleteElem}>BORRAR</Button> </td>
              </tr>)}
              <tr>
                <td>Total</td>
                <td></td>
                <td></td>
                <td>${price()}</td>
              </tr>
            </tbody>
          </Table>
        ) : (
            <strong>No se cargaron productos al carrito. </strong>
          )}

    </>
  )
}


export default function Cart() {

  const { cache, cacheSize} = useCartContext()


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
            {cacheSize > -1 ?
              <CheckOutForm /> : ''}
            <Link to="/">
              <button> Volver </button>
            </Link>
          </Col>
        </Row>
      </Container>
  );
}
