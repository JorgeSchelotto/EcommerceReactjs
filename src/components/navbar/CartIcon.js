import React, {useEffect, useState} from 'react';
import { Cart3 } from 'react-bootstrap-icons';
import { useCartContext } from "../../Context/cartContext";


function CartIcon(){
    const {
      cache
      } = useCartContext();
      const [total, setTotal] = useState();


      useEffect(() => {
  
        setTotal(cache.reduce((sum, value) => (typeof value.total === 'number' ? sum + value.total : sum), 0));

    
      }, [cache])

    


    return(         
      <>            
        <Cart3 color="gray" disabled />
        {total ? <small> {total} </small> : <small>0</small> }
      </>
    )
}


export default CartIcon;