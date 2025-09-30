import React, { useState } from "react";
import { Table, Form, Button } from "react-bootstrap";

export default function Reportes() {
  const [filtro, setFiltro] = useState("");
  const [reportes, setReportes] = useState([
    { id: 1, cliente: "Juan Pérez", servicio: "Velación", fecha: "2025-09-20", estado: "Terminado" },
    { id: 2, cliente: "María López", servicio: "Sepelio", fecha: "2025-09-25", estado: "Pendiente" },
    { id: 3, cliente: "Carlos Gómez", servicio: "Misa", fecha: "2025-09-28", estado: "En proceso" },
  ]);

  const reportesFiltrados = reportes.filter(
    (r) =>
      r.cliente.toLowerCase().includes(filtro.toLowerCase()) ||
      r.servicio.toLowerCase().includes(filtro.toLowerCase()) ||
      r.estado.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Reportes Funeraria</h2>

      {/* Barra de búsqueda */}
      <Form.Control
        type="text"
        placeholder="Buscar por cliente, servicio o estado..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        className="mb-3"
      />

      {/* Tabla de reportes */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Cliente</th>
            <th>Servicio</th>
            <th>Fecha</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {reportesFiltrados.map((r) => (
            <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.cliente}</td>
              <td>{r.servicio}</td>
              <td>{r.fecha}</td>
              <td>{r.estado}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Botones básicos */}
      <div className="d-flex gap-2">
        <Button variant="success">Exportar Excel</Button>
        <Button variant="danger">Exportar PDF</Button>
      </div>
    </div>
  );
}
