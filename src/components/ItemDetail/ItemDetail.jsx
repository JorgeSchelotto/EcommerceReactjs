import React from 'react';
import './ItemDetail.css';
import { Link } from 'react-router-dom';




export default function ItemDetail({product}){
   


    return (
        
        <>
        <Link to="/"> <button> Volver </button> </Link>
        <div>
            <p>Nombre: {product.name}</p>
            <p>Stock: {product.stock}</p>
            <p>Descripcion: {product.description}</p>
        </div>

         <div>
            <button> COMPRAR </button>
        </div>
        </>
        
    )
}
