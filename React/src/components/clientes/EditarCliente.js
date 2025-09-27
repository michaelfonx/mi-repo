import React from "react";
import { useState, } from "react";
import { Container, Card, Form, Button, Alert } from "react-bootstrap";


const EditarCliente = () => {

    return (
        <Container className="mt-5" style={{ maxWidth: "600px" }}>
            <Card>
                <Card.Header>
                    <h3 className="text-center">Editar Cliente</h3>
                </Card.Header>
                <Card.Body>
                    <Form >
                        <Form.Group className="mb-3" controlId="PrimerNombreCliente">
                            <Form.Label>Primer Nombre : </Form.Label>
                            <Form.Control
                                type="text"
                                name="PrimerNombreCliente"


                                placeholder="digite el primer nombre del cliente"
                            />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="SegundoNombreCliente">
                            <Form.Label>Segundo Nombre : </Form.Label>
                            <Form.Control
                                type="text"
                                name="PrimerNombreCliente"


                                placeholder="digite el segundo nombre del cliente"
                            />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="PrimerApellidoCliente">
                            <Form.Label>Primer Apellido : </Form.Label>
                            <Form.Control
                                type="text"
                                name="PrimerApellidoCliente"


                                placeholder="digite el primer apellido cliente"
                            />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="SegundoApellidoCliente">
                            <Form.Label>Segundo Apellido : </Form.Label>
                            <Form.Control
                                type="text"
                                name="SegundoApellidoCliente"


                                placeholder="digite el segundo apellido del cliente"
                            />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="TelefonoCliente">
                            <Form.Label>Telefono : </Form.Label>
                            <Form.Control
                                type="text"
                                name="TelefonoCliente"


                                placeholder="digite el telefono del cliente"
                            />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="DireccionCliente">
                            <Form.Label>Direccion : </Form.Label>
                            <Form.Control
                                type="text"
                                name="DireccionCliente"


                                placeholder="digite la direccion del cliente"
                            />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="CorreoCliente">
                            <Form.Label>Correo Telefono : </Form.Label>
                            <Form.Control
                                type="text"
                                name="CorreoCliente"


                                placeholder="digite el Correo del cliente"
                            />

                        </Form.Group>

                        <Button style={{ background: "#7856AE", border: "#7856AE" }} type="submit">Guardar</Button>
                        <Button style={{ background: "#7856AE", border: "#7856AE" }} className="mx-5" type="button">Cancelar</Button>

                    </Form>
                </Card.Body>
            </Card>

        </Container>
    );
}

export default EditarCliente;