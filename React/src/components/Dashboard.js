import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const items = [
    { name: "Clientes", path: "/clientes" },
    { name: "Usuarios", path: "/usuarios" },
    { name: "Categorías", path: "/categorias" },
    { name: "Subcategorías", path: "/subcategorias" },
    { name: "Productos", path: "/productos" },
    { name: "Compras", path: "/compras" },
    { name: "Trámites", path: "/tramites" },
    { name: "Cronograma", path: "/cronograma" },
    { name: "Reportes", path: "/reportes" },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h2 className="fw-bold mb-4">GESTIONES</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "20px",
          justifyItems: "center",
          marginTop: "20px",
        }}
      >
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Card
              style={{
                width: "180px",
                height: "120px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                transition: "all 0.2s ease-in-out",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.backgroundColor = "#a000f0";
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.style.color = "black";
              }}
            >
              <Card.Body className="d-flex justify-content-center align-items-center">
                <span className="fw-bold">{item.name}</span>
              </Card.Body>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

