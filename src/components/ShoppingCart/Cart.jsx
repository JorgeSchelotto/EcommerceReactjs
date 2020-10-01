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


  function deleteElem(event, id) {
    event.stopPropagation()
    console.log(id)
    deleteElement(id);
  }


  return (

    <>
        {cacheSize > 0 && 
          <Table striped bordered hover responsive="md" variant="dark">
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
                <td> <Button variant="outline-light" onClick={(event)=> deleteElem(event, p.item.id) }>BORRAR</Button> </td>
              </tr>)}
              <tr>
                <td>Total</td>
                <td></td>
                <td></td>
                <td>${price()}</td>
              </tr>
            </tbody>
          </Table>
        }

    </>
  )
}


export default function Cart() {

  const { cache } = useCartContext()


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

              <CheckOutForm />
              <br></br> 
              <br></br> 
            <Link to="/">
              <button> Volver </button>
            </Link>
          </Col>
        </Row>
      </Container>
  );
}
