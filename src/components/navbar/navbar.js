import React from 'react';
import './navbar.css';
import logo from './assets/logoExtremo.png'
import CartIcon from './CartIcon';




function Nav() {
    return (


        <nav className="navbar">
            <ul className="menu logo">
                <li><a href="#"><img className="item logo" src={logo} alt="ExtremoZur" title="ExtremoZur"></img> </a></li>
            </ul>
            <ul className="menu">
                <li className="item"><a href="#">Home</a></li>
                <li className="item"><a href="#">About</a></li>
                <li className="item"><a href="#">Services</a></li>
                <li className="item"><a href="#">Products</a></li>
                <li className="item"><a href="#">Contact</a> </li>
            </ul>
            {/* <ul className="menu action">
                <li><button className="item button">LogIn</button></li>
                <li><button className="item button secondary">SignUp</button></li>
            </ul> */}
            <ul className="shoppingCartMenu">
                <li>
                    <CartIcon path="#"/>
                </li>
                <li><button className="item button">LogIn</button></li>
                <li><button className="item button secondary">SignUp</button></li>
            </ul>
        </nav>


    )

}


export default Nav;