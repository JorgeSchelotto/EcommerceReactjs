import React, { useState, useEffect} from 'react';
import './itemList.css';


export default function ItemList({products}){

    return (
        <div>
            {products.map(p => <li key={p.id} >Nombre: {p.nombre} - Descripcion: {p.description} - Stock: {p.stock}</li>)}
        </div>
    )
}

