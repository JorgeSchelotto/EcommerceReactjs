import React, { useState } from "react";
import {Container, Row, Col} from 'react-bootstrap';
import "./style.css";


const  Counter = ({initial, max, min, onAdd, total}) => {
    const [ count , setCount ] = useState(initial); // count es el estado y setCount la funcion para actualizar el estado
 
    function add(){
      setCount( (!isNaN(parseFloat(count)) && isFinite(count)) ? (count < max ? count + 1: count): count )
    };

    function subtract(){
      setCount( (!isNaN(parseFloat(count)) && isFinite(count)) ? (count > min ? count - 1: count): count )
    };


  

    return (
      <>
      <Container>
      <Row>
      <Col lg={4} md={6} xs={6}>

        <div className="countContainer">
          <div className="countContainerAction">
            <h3>{count}</h3>
            <div className="countContainerActionButtons">
              <button disabled={(count <= min)} onClick={subtract}>-</button>
              <button disabled={(count === max)} onClick={add} >+</button>
            </div>
            <div className="countContainerCartButton">
              <button
                disabled={(count <= 0) || (count > max) || total >= max }
                onClick={() => onAdd(count)}
              > ADD </button>
              <br></br>
              <span hidden={total<20}><small style={{fontSize:".5rem"}}> El limite son {max} unidades </small></span>
            </div>
          </div>
        </div>
        </Col>
        </Row>
        </Container>
        
      </>
    )
}

export default Counter;