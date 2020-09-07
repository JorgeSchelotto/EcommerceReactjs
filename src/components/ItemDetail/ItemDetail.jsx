import React, { useState, useEffect } from "react";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

import Counter from "../Count/Counter";
import { useCartContext } from "../../Context/cartContext";


function BuyButton({prod, total}) {
    const {
        cache,
        addToCache,
      } = useCartContext();


      useEffect(() => {
    
      }, [cache])

      
  function clickBuy(event) {
    event.stopPropagation();
    addToCache({ item: prod, total: total });
  }

  return(
    
        <button onClick={clickBuy}> AGREGAR AL CARRITO </button>
  )




}

export default function ItemDetail({ product }) {

  let [total, setTotal] = useState(0);
  const min = 1;
  const max = product.stock;

  function onAddTotal(count) {
    setTotal(total + count >= max ? (total = max) : total + count);
  }


  return (
    <>
      <Row>
        <Col xs={12} md={8}>
          <Link to="/">
            <button> Volver </button>
          </Link>
          <div style={{ margin: "auto" }}>
            <p>Nombre: {product.name}</p>
            <p>Stock: {product.stock}</p>
            <p>Descripcion: {product.description}</p>
          </div>

          <div>
            <p>
              <span>Total </span>
              <span>{total ? total : ""}</span>
            </p>
            {/* <Link to="/shoppingCart">  */}
                <BuyButton prod={product} total={total}/>
            {/* </Link> */}
          </div>
        </Col>

        <Col xs={12} md={4}>
          <div>
            <Counter
              initial={1}
              min={min}
              max={product.stock}
              onAdd={onAddTotal}
              total={total}
            />
          </div>
        </Col>
      </Row>
    </>
  );
}
