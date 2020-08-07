import React from 'react';



function Nav(){
    return(
        <>
        
        <nav> 
            <ul class="menu"> 
                <li class="item"><a href="#">Home</a></li> 
                <li class="item"><a href="#">About</a></li> 
                <li class="item"><a href="#">Services</a></li> 
                <li class="item"><a href="#">Products</a></li> 
                <li class="item"><a href="#">Contact</a> </li> 
                <li class="item button"><a href="#">LogIn</a></li> 
                <li class="item button secondary"><a href="#">SignUp</a></li> 
            </ul> 
        </nav>

        </>
    )

}


export default Nav;