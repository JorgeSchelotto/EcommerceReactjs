import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function CheckOutForm() {




    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" />
                <Form.Text className="text-muted">
                    <small>Nunca compartiremos tu email</small>
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicNombre">
                <Form.Label>Nombre </Form.Label>
                <Form.Control type="text" placeholder="Nombre" />
            </Form.Group>
            <Form.Group controlId="formBasicTelefono">
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="tel" placeholder="Telefono" />
            </Form.Group>
            <Button variant="primary" type="submit">
                FINALIZAR COMPRA
            </Button>
        </Form>
    )
}

export default CheckOutForm
