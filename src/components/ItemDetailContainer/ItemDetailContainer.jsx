import React, {useState, useEffect} from 'react';
import './ItemDetailContainer.css';
// import itemList from '../ItemList/mockProducts';
import ItemDetail from '../ItemDetail/ItemDetail';
import {  useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase/index';




export default function ItemDetailContainer(){
    
    const { id } = useParams()
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [loading, setLoading] = useState(true);


    // Ejemplo con mocks
    // useEffect(() => {
        
    //     const prod = new Promise((resolve) =>{
    //         setTimeout(()=>{
    //             resolve(itemList)
    //         }, )
    //     });

    //     prod.then(resolve => {
    //         console.log(resolve);
    //         const product = resolve.find( p => p.id === id );
    //         setSelectedProduct(product);
    //         setLoading(false);
  
    //     });
    //     console.log('Mounted ItemDetail id: ', id);
    //     return () => {
    //         console.log('Dismounted ItemDetail')
    //     };
    // }, [id]);

    useEffect(() => {
        
        const db = getFirestore();
        const itemCollection = db.collection("items")
        const item = itemCollection.doc(id)
        
        item.get().then((doc) => {
            if (doc.size === 0){
                console.log('No results!');
                return
            }

            console.log('Item Found!');
            if (doc.exists === false){
                setSelectedProduct(doc.exists)
            } else {
                setSelectedProduct({ id: doc.id, ...doc.data() });
            }
        }).catch((error) => {
            console.log("Error searching items: ", error)
        }).finally(() => {
            setLoading(false);
        })
    }, [id]);

    
    return (
        <>
        
        {selectedProduct ? <ItemDetail product={selectedProduct} /> : selectedProduct === false && <strong> No se encontro el item</strong>  }
        {console.log(selectedProduct)}
        
        
        </>
    )
}

