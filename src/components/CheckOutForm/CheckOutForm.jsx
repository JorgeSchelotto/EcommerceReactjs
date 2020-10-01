import React, { Fragment, useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import * as firebase from 'firebase/app';
import 'firebase/firestore'
import { getFirestore } from '../../firebase/index';
import { useCartContext } from "../../Context/cartContext";

function CheckOutForm() {

    const [buyer, setbuyer] = useState({
        email: '',
        emailSegundo: '',
        nombre: '',
        telefono: '',
    });

    const [id, setId] = useState(0);

    const { cache, price, cleanCache, cacheSize } = useCartContext()
    // const [orderId, setOrderId] = useState('');
    const db = getFirestore();
    const orders = db.collection("orders");

    useEffect(() => {
        console.log("Receiving new cache")

    }, [cache])

    useEffect(() => {
        console.log("Receiving new id: " + id)

    }, [id])


    // Creo orden de compra
    async function CreateOrder(event) {
        event.preventDefault();
        const order = {
            buyer: buyer,
            items: cache,
            date: firebase.firestore.FieldValue.serverTimestamp(),
            total: price(),
        }
        console.log("Order: " + order)
        try {
            const orderId = await orders.add(order);
            setId(orderId.id);
            cleanCache();

        } catch (error) {
            console.log(error)
        }
    }


    const handleInputChange = (event) => {
        setbuyer({
            ...buyer,
            [event.target.name]: event.target.value,
        })
    }

    return (
        <>
        {id ? <strong>La order de compra se generó correctamente. Su identificador es: {id}</strong> :
            

        !(cacheSize <= 0) ?
        <span><Fragment>
            <Form onSubmit={CreateOrder}>
                <Form.Group controlId="formBasicEmail" >
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" onChange={handleInputChange} name="email" required /> 
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Repetir Email</Form.Label>
                    <Form.Control type="emailSegundo" placeholder="Ingresa nuevamente tu email" onChange={handleInputChange} name="emailSegundo" required />
                </Form.Group>

                <Form.Group controlId="formBasicNombre">
                    <Form.Label>Nombre </Form.Label>
                    <Form.Control type="text" placeholder="Nombre" onChange={handleInputChange} name="nombre" required />
                </Form.Group>
                <Form.Group controlId="formBasicTelefono">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control type="tel" placeholder="Telefono" onChange={handleInputChange} name="telefono" required />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={buyer.email !== buyer.emailSegundo || !buyer.email }>
                    FINALIZAR COMPRA
            </Button>
            </Form>
            
        </Fragment></span> : 
        
        <strong>No se cargaron productos al carrito.</strong>}
        </>

        
    )
}

export default CheckOutForm
