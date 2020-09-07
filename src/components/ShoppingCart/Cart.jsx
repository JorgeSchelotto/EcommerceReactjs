import React, {useEffect} from "react";
import "./Cart.css";
import { Container, Row, Col } from "react-bootstrap";

import { useCartContext } from "../../Context/cartContext";


export function CacheView(){
    const {cache, cacheSize} = useCartContext()

    useEffect(() => {
  
    }, [cache])


    return (
        <>
            {cacheSize > 0 ? (
                cache.map(p =>  <div><span> {p.item.name} Cantidad: {p.total} </span></div> )
                
            ) : (
                <strong>No se cargo nada al carrito. </strong>
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
          <CacheView/>
        </Col>
      </Row>
    </Container>
  );
}
