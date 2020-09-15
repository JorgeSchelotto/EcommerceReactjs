import React, { useState, useEffect } from 'react';
import ItemList from '../components/ItemList/ItemList';
// import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import { Container, Row, Col } from 'react-bootstrap';
import { getFirestore } from '../firebase/index';
import { useParams } from 'react-router-dom';



function Home() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);  
    const  { categoryid = undefined } = useParams();

    useEffect(() => {
        
        const db = getFirestore();
        const itemCollection =  db.collection("items"); 
        let query = categoryid ? itemCollection.where('categoryid', '==', categoryid).limit(20): itemCollection ;
        

        query.get().then((querySnapshot) => {
            if (querySnapshot.size === 0){
                console.log('No results!');
                return
            }

            console.log('Item Found!');
            setProducts(querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()})));
        }).catch((error) => {
            console.log("Error searching items: ", error)
        }).finally(() => {
            setLoading(false);
        })
        console.log(categoryid)
    }, [categoryid]);


        // Ejemplo con mocks
    // useEffect(() => {
    //     // const db = getFirestone();
    //     // const itemsCollection = db.collection('items');

    //     const promProducts = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(items);
    //         }, 3000);
    //       });

    //     promProducts.then(resolve => {
    //     setProducts(resolve); 
    //     setLoading(false); 
    //     });


    // }, []);





    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <div>
                            {loading && <p>Loading...</p>}
                            <ItemList products={products} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>

    )


}

export default Home;