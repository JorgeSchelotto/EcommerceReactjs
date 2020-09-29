import React, { useState } from "react";
import {Container, Row, Col} from 'react-bootstrap';
import "./style.css";



const  Counter = ({initial, max, min, onAdd, onSubstract, total}) => {
    const [ count , setCount ] = useState(initial); // count es el estado y setCount la funcion para actualizar el estado

    function clickAdd(){
      onAdd(count)
    }


    function clickSubstract(){
      onSubstract(count)
    }
 
    function add(event){
      event.stopPropagation();
      clickAdd();
    };

    function subtract(event){
      event.stopPropagation();
      clickSubstract();
    };




    return (
      <>
        <Container>
          <Row>
          <Col lg={12} md={12} xs={12}> 
          <span>Cantidad: {total}</span>
          </Col>
          </Row>
          <Row>
            <Col lg={12} md={12} xs={12}>
                  <div className="countContainerActionButtons">
                    <button disabled={(total <= min)} onClick={(event) => subtract(event)}><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 1024 1024" height="1em" width="1em"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h368c4.4 0 8 3.6 8 8v48z" /></svg></button>
                    <button disabled={(total >= max)} onClick={(event) => add(event)} ><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z"></path></svg></button>
                  </div>
                  <div className="countContainerCartButton">
                    <br></br>
                    <span hidden={total < max}><small> El stock disponible es de {max} unidades </small></span>
                  </div>
            </Col>
          </Row>
        </Container>
      </>
    )
}

export default Counter;