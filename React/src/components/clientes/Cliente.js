import React from "react";
import { Container, Table, Row, Col, Button, Form, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cliente = () => {
    return (
        <Container  className="my-5">
            <Row className="mb-4">
                <Col>
                    <h2>Lista de clientes</h2>
                </Col>
                <Col className="text-end" >
                    <Button as={Link} to="/clientes/AgregarCliente" style={{ background: "#7856AE", border: "#7856AE" }}>
                        Agregar Cliente
                    </Button>
                </Col>
            </Row>
            <Form className="mb-3">
                <Row>
                    <Col md={8}>
                        <Form.Control
                            type="text"
                            placeholder="Buscar por documento de indentidad......"
                        />
                    </Col>
                    <Col md={4} >
                        <Button type="submit" className="me-4"  variant="outline-dark" >Buscar</Button>
                        <Button type="button"  variant="outline-dark">Mostrar Todos</Button>
                    </Col>
                </Row>
            </Form>
            <Table striped bordered hover >
                <thead className="table-secondary">
                    <tr >
                        <td scope="col">Documento</td>
                        <td scope="col">Primer Nombre</td>
                        <td scope="col">Segundo Nombre</td>
                        <td scope="col">Primer Apellido</td>
                        <td scope="col">Segundo Apellido</td>
                        <td scope="col">Email</td>
                        <td scope="col">Direccion</td>
                        <td scope="col">Telefono</td>
                        <td scope="col">Fecha de Nacimiento</td>
                        <td scope="col">Edad</td>
                        <td scope="col">Acciones</td>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>1025887459</td>
                        <td>Gisel</td>
                        <td>Estefania</td>
                        <td>Torres</td>
                        <td>Corredor</td>
                        <td>estefaniatorres1216@gamail.com</td>
                        <td>Tv 70 # 67b sur 80</td>
                        <td>3115644133</td>
                        <td>12-05-2005</td>
                        <td>20</td>
                        <td>
                            <Dropdown>
                                <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                                    Acciones
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to="/clientes/EditarCliente">Editar</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Detalles</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Habilitar</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                    </tr>
                    <tr>
                        <td>1025887459</td>
                        <td>Gisel</td>
                        <td>Estefania</td>
                        <td>Torres</td>
                        <td>Corredor</td>
                        <td>estefaniatorres1216@gamail.com</td>
                        <td>Tv 70 # 67b sur 80</td>
                        <td>3115644133</td>
                        <td>12-05-2005</td>
                        <td>20</td>
                        <td>
                            <Dropdown>
                                <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                                    Acciones
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to="/clientes/EditarCliente">Editar</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Detalles</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Habilitar</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                    </tr>
                    <tr>
                        <td>1025887459</td>
                        <td>Gisel</td>
                        <td>Estefania</td>
                        <td>Torres</td>
                        <td>Corredor</td>
                        <td>estefaniatorres1216@gamail.com</td>
                        <td>Tv 70 # 67b sur 80</td>
                        <td>3115644133</td>
                        <td>12-05-2005</td>
                        <td>20</td>
                        <td>
                            <Dropdown>
                                <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                                    Acciones
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to="/clientes/EditarCliente">Editar</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Detalles</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Habilitar</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                    </tr>
                    <tr>
                        <td>1025887459</td>
                        <td>Gisel</td>
                        <td>Estefania</td>
                        <td>Torres</td>
                        <td>Corredor</td>
                        <td>estefaniatorres1216@gamail.com</td>
                        <td>Tv 70 # 67b sur 80</td>
                        <td>3115644133</td>
                        <td>12-05-2005</td>
                        <td>20</td>
                        <td>
                            <Dropdown>
                                <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                                    Acciones
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to="/clientes/EditarCliente">Editar</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Detalles</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Habilitar</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                    </tr>
                    <tr>
                        <td>1025887459</td>
                        <td>Gisel</td>
                        <td>Estefania</td>
                        <td>Torres</td>
                        <td>Corredor</td>
                        <td>estefaniatorres1216@gamail.com</td>
                        <td>Tv 70 # 67b sur 80</td>
                        <td>3115644133</td>
                        <td>12-05-2005</td>
                        <td>20</td>
                        <td>
                            <Dropdown>
                                <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                                    Acciones
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to="/clientes/EditarCliente">Editar</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Detalles</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Habilitar</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                    </tr>
                    <tr>
                        <td>1025887459</td>
                        <td>Gisel</td>
                        <td>Estefania</td>
                        <td>Torres</td>
                        <td>Corredor</td>
                        <td>estefaniatorres1216@gamail.com</td>
                        <td>Tv 70 # 67b sur 80</td>
                        <td>3115644133</td>
                        <td>12-05-2005</td>
                        <td>20</td>
                        <td>
                            <Dropdown>
                                <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                                    Acciones
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to="/clientes/EditarCliente">Editar</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Detalles</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Habilitar</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                    </tr>
                    <tr>
                        <td>1025887459</td>
                        <td>Gisel</td>
                        <td>Estefania</td>
                        <td>Torres</td>
                        <td>Corredor</td>
                        <td>estefaniatorres1216@gamail.com</td>
                        <td>Tv 70 # 67b sur 80</td>
                        <td>3115644133</td>
                        <td>12-05-2005</td>
                        <td>20</td>
                        <td>
                            <Dropdown>
                                <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                                    Acciones
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to="/clientes/EditarCliente">Editar</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Detalles</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Habilitar</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                    </tr>
                  
                </tbody>


            </Table>

            <nav aria-label="page navigation">
                <ul class=" pagination justify-content-center">
                    <li class="page-item disabled">
                        <a class="page-link">ATRAS</a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#">SIGUIENTE</a>
                    </li>
                </ul>
            </nav>



        </Container>
    );

}

export default Cliente;