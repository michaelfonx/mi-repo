import React, { useState } from "react";
import { Table, Form, Button } from "react-bootstrap";

function Tramites() {
  const [tramites, setTramites] = useState([
    { id: 1, nombre: "Solicitud de Exhumación", estado: "En proceso" },
    { id: 2, nombre: "Inscripción de Sepelio", estado: "Completado" },
  ]);

  const [nuevoTramite, setNuevoTramite] = useState("");
  const [estado, setEstado] = useState("Pendiente");

  const agregarTramite = () => {
    if (nuevoTramite.trim() === "") return;
    const nuevo = {
      id: tramites.length + 1,
      nombre: nuevoTramite,
      estado: estado,
    };
    setTramites([...tramites, nuevo]);
    setNuevoTramite("");
    setEstado("Pendiente");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Gestión de Trámites</h2>

      {/* Formulario */}
      <div className="d-flex gap-2 mb-3">
        <Form.Control
          type="text"
          placeholder="Nombre del trámite"
          value={nuevoTramite}
          onChange={(e) => setNuevoTramite(e.target.value)}
        />
        <Form.Select value={estado} onChange={(e) => setEstado(e.target.value)}>
          <option>Pendiente</option>
          <option>En proceso</option>
          <option>Completado</option>
        </Form.Select>
        <Button onClick={agregarTramite}>Agregar</Button>
      </div>

      {/* Tabla */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {tramites.map((t) => (
            <tr key={t.id}>
              <td>{t.id}</td>
              <td>{t.nombre}</td>
              <td>{t.estado}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Tramites;
