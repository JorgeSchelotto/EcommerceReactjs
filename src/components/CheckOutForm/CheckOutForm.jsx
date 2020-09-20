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
        nombre: '',
        telefono: '',
    });

    const { cache, price } = useCartContext()
    // const [orderId, setOrderId] = useState('');
    const db = getFirestore();
    const orders = db.collection("orders");

    useEffect(() => {
        console.log("Receiving new cache")

    }, [cache])


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
            const {id} = await orders.add(order);
        } catch (error) {
            console.log(error)
        }
        // console.log("Order buyer: " + ' Email:  ' + order.buyer.email + ', Nombre: ' + order.buyer.nombre + ', Telefono: ' + order. buyer.telefono  )
        // console.log("items: " + order.items  )
        // console.log("Date: " + order.date  )
        // console.log("total: " + order.total  )
    }


    const handleInputChange = (event) => {
        setbuyer({
            ...buyer,
            [event.target.name]: event.target.value,
        })
    }

    return (
        <Fragment>
            <Form onSubmit={CreateOrder}>
                <Form.Group controlId="formBasicEmail" >
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" onChange={handleInputChange} name="email" required />
                    <Form.Text className="text-muted">
                        <small>Nunca compartiremos tu email</small>
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicNombre">
                    <Form.Label>Nombre </Form.Label>
                    <Form.Control type="text" placeholder="Nombre" onChange={handleInputChange} name="nombre" required />
                </Form.Group>
                <Form.Group controlId="formBasicTelefono">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control type="tel" placeholder="Telefono" onChange={handleInputChange} name="telefono" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    FINALIZAR COMPRA
            </Button>
            </Form>
        </Fragment>
    )
}

export default CheckOutForm
