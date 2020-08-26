import React from 'react';
import './ItemDetail.css';




export default function ItemDetail({product}){

    return (
        
        <>
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
