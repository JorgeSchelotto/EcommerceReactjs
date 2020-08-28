import React, {useState, useEffect} from 'react';
import './ItemDetailContainer.css';
import itemList from '../ItemList/mockProducts';
import ItemDetail from '../ItemDetail/ItemDetail';
import {  useParams } from 'react-router-dom';




export default function ItemDetailContainer(){
    
    const { id } = useParams()
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        const prod = new Promise((resolve) =>{
            setTimeout(()=>{
                resolve(itemList)
            }, 1000)
        });

        prod.then(resolve => {
            console.log(resolve);
            const product = resolve.find( p => p.id === id );
            setSelectedProduct(product);
            setLoading(false);
  
        });
        console.log('Mounted ItemDetail id: ', id);
        return () => {
            console.log('Dismounted ItemDetail')
        };
    }, [id]);

    
    return (
        <>
        {loading && <p>Loading...</p>}
        {selectedProduct && <ItemDetail product={selectedProduct} />}
        
        
        </>
    )
}

