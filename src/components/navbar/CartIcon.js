import React from 'react';
import shopingCart from './assets/shoppingCart.png';


function CartIcon({path}){

    return(                     
    <a href={path}>
        <img className="shoppingCart" src={shopingCart} alt="Shopping Kart" title="Shopping Kart"></img>
    </a>
    )
}


export default CartIcon;