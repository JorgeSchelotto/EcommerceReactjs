import React, {useState, useEffect} from 'react';
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';




export default function ItemDetailContainer({products}){

    const [selectedProduct, setSelectedProduct] = useState();
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const prod = new Promise((resolve) =>{
            setTimeout(()=>{
                resolve(products)
            }, 4000)
        });

        prod.then(resolve => {
            console.log(resolve);
            const product = resolve.filter( p => p.id === 2 );
            setSelectedProduct(product);
            setLoading(false);
  
        });
    }, []);


    return (
        <>
        {loading && <p>Loading...</p>}
        <ItemDetail product={selectedProduct} />
        </>
    )
}

