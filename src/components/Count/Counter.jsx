import React, { useState } from "react";
import "./style.css";


const  Counter = ({initial, max, min, onAdd}) => {
    const [ count , setCount ] = useState(initial);
    // count es el estado y setCount la funcion para actualizar el estado
   
 
    function add(){
      setCount( (!isNaN(parseFloat(count)) && isFinite(count)) ? (count < max ? count + 1: count): count )
    };

    function subtract(){
      setCount( (!isNaN(parseFloat(count)) && isFinite(count)) ? (count > min ? count - 1: count): count )
    };

  

    return (
      <>
        <div className="countContainer">
          <div className="countContainerAction">
            <h3>{count}</h3>
            <div className="countContainerActionButtons">
              <button disabled={(count === max)} onClick={add} >+</button>
              <button disabled={(count <= min)} onClick={subtract}>-</button>
            </div>
            <div className="countContainerCartButton">
              <button
                onClick={() => onAdd(count)}
                disabled={(count <= 0) || (count > max) }
              > ADD</button>
            </div>
          </div>

        </div>
        
      </>
    )
}

export default Counter;