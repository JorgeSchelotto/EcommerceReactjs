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
    total<prod.total ? addToCache({ item: prod, total: total }) :  addToCache({ item: prod, total: prod.stock });
  }

  return(
    
        <button onClick={clickBuy} disabled={total<=0 || total>=prod.stock}> AGREGAR AL CARRITO </button>
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
          
          <div style={{ margin: "auto", paddingTop: "2rem" }}>
            <img src="https://via.placeholder.com/500x350.png"></img>
            <p>Nombre: {product.title}</p>
            
            <p>Descripcion: {product.description}</p>
            <p>Stock: {product.stock}</p>
            <p>Precio: {product.price}</p>
          </div>

          <div>
            <p>
              <span>Cantidad: </span>
              <span>{total ? total : 0}</span>
            </p>
            {/* <Link to="/shoppingCart">  */}
                <BuyButton prod={product} total={total} onAdd={onAddTotal}/>
                <Link to="/">
            <button> Volver </button>
          </Link>
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
