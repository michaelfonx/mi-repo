import React, { useState } from "react";
import { Table, Form, Button } from "react-bootstrap";

function Reportes() {
  const [eventos] = useState([
    { id: 1, cliente: "Juan Pérez", titulo: "Misa", fecha: "2025-09-20" },
    { id: 2, cliente: "María Gómez", titulo: "Sepelio", fecha: "2025-09-21" },
    { id: 3, cliente: "Carlos Ramírez", titulo: "Velación", fecha: "2025-09-22" },
  ]);

  const [filtro, setFiltro] = useState("");

  const eventosFiltrados = eventos.filter((e) =>
    filtro == "" ? true : e.cliente.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Reportes</h2>

      <div className="d-flex mb-3 gap-2">
        <Form.Control
          type="text"
          placeholder="Buscar cliente"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        />
        <Button onClick={() => setFiltro("")}>Limpiar</Button>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Evento</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {eventosFiltrados.map((e) => (
            <tr key={e.id}>
              <td>{e.cliente}</td>
              <td>{e.titulo}</td>
              <td>{e.fecha}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Reportes;
