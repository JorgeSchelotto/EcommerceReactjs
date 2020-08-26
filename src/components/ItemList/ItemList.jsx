import React from 'react';
import './itemList.css';
import Item from '../Item/item';



export default function ItemList({products}){

    return (
        

        <div>
            {products.map(p => <><Item key={p.id} product={p} /> </>)}
        </div>
        
    )
}

