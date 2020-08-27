import React, {useState, useEffect} from 'react';
import './ItemDetailContainer.css';
import itemList from '../ItemList/mockProducts';
import ItemDetail from '../ItemDetail/ItemDetail';




export default function ItemDetailContainer(){
    const [selectedProduct, setSelectedProduct] = useState([itemList]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const prod = new Promise((resolve) =>{
            setTimeout(()=>{
                resolve(itemList)
            }, 4000)
        });

        prod.then(resolve => {
            console.log(resolve);
            const product = resolve.filter( p => p.id === 2 )[0];
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

