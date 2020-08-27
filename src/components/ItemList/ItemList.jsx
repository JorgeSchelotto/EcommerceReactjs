import React from 'react';
import './itemList.css';
import Item from '../Item/item';
import CardDeck from 'react-bootstrap/CardGroup';




export default function ItemList({products}){

    return (
        

        <div>
            <CardDeck>{products.map(p => <><Item key={p.id} product={p} /></>)}</CardDeck>
        </div>
        
    )
}

