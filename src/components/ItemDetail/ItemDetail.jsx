import React, { useState, useEffect } from "react";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

import Counter from "../Count/Counter";
import { useCartContext } from "../../Context/cartContext";


function BuyButton({ prod, total}) {
  const {
    cache,
    addToCache,
  } = useCartContext();


  useEffect(() => {

  }, [cache])

  useEffect(() => {

  }, [total])



  function clickBuy(event) {
    event.stopPropagation();
    (total < prod.stock) ? addToCache({ item: prod, total: total }) : addToCache({ item: prod, total: prod.stock });
  }

  return (
    <>
    <button onClick={clickBuy} disabled={total<= 0 || total  > prod.stock}> AGREGAR AL CARRITO </button>
    </>
  )

}

export default function ItemDetail({ product }) {

  let [total, setTotal] = useState(0);
  const min = 1;

  function onAddTotal(count) {
    setTotal(total + 1);
  }

  function onSubstractTotal(count) {
    setTotal(total - 1);

  }


  return (
    <>
      <Row>
        <Col xs={12} md={12}>

          <div style={{ margin: "auto", paddingTop: "2rem" }}>
            <img src="https://via.placeholder.com/500x350.png"></img>
            {console.log(product)}
            <p>Nombre: {product.title}</p>
            <p>Id: {product.id}</p>
            <p>Descripcion: {product.description}</p>
            <p>Stock: {product.stock}</p>
            <p>Precio: {product.price}</p>
          </div>

          <div>
                <Counter
                  initial={1}
                  min={min}
                  max={product.stock}
                  onAdd={onAddTotal}
                  onSubstract={onSubstractTotal}
                  total={total}
                />


            {/* <Link to="/shoppingCart">  */}
            <BuyButton prod={product} total={total}/>
            <Link to="/">
              <button> Volver </button>
            </Link>
            {/* </Link> */}
          </div>
        </Col>
      </Row>
    </>
  );
}
