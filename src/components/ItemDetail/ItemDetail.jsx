import React, { useState, useEffect } from "react";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import { Row, Col, Image  } from "react-bootstrap";

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

  function onAddTotal() {
    setTotal(total + 1);
  }

  function onSubstractTotal() {
    setTotal(total - 1);

  }


  return (
    <>
      <Row>
        <Col xs={12} md={12}>

          <div style={{ margin: "auto", paddingTop: "2rem" }}>
            <Image  src={require(`../../assets/image/${product.imageid}`)} fluid></Image>
            <br></br>
            <br></br>

            <p>Nombre: {product.title}</p>
            <p>Descripcion: {product.description}</p>
            <p>Stock: {product.stock}</p>
            <p>Precio: {product.price}</p>
          </div>

          <div>
                <Counter
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
