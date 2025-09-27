import React, { useState } from "react";
import { Table, Button, Form } from "react-bootstrap";

function Cronograma() {
  const [eventos, setEventos] = useState([]);
  const [nuevoEvento, setNuevoEvento] = useState("");
  const [dia, setDia] = useState("");

  const diasSemana = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
  const diasMes = Array.from({ length: 30 }, (_, i) => i + 1);

  const agregarEvento = () => {
    if (dia & nuevoEvento) {
      setEventos([...eventos, { dia, texto: nuevoEvento }]);
      setNuevoEvento("");
      setDia("");
    }
  };

  const eventosDelDia = (d) => {
    return eventos.filter((e) => e.dia == d);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Cronograma</h2>

      <div className="d-flex mb-3 gap-2">
        <Form.Control
          type="number"
          placeholder="Día"
          value={dia}
          onChange={(e) => setDia(Number(e.target.value))}
          style={{ width: "100px" }}
        />
        <Form.Control
          type="text"
          placeholder="Evento"
          value={nuevoEvento}
          onChange={(e) => setNuevoEvento(e.target.value)}
        />
        <Button onClick={agregarEvento}>Agregar</Button>
      </div>

      <Table bordered>
        <thead>
          <tr>
            {diasSemana.map((d) => (
              <th key={d}>{d}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 5 }).map((_, semana) => (
            <tr key={semana}>
              {diasSemana.map((_, diaSemana) => {
                const diaNumero = semana * 7 + diaSemana + 1;
                if (diaNumero > diasMes.length) {
                  return <td key={diaSemana}></td>;
                }
                return (
                  <td key={diaSemana} style={{ verticalAlign: "top" }}>
                    <strong>{diaNumero}</strong>
                    <ul style={{ paddingLeft: "15px" }}>
                      {eventosDelDia(diaNumero).map((ev, i) => (
                        <li key={i}>{ev.texto}</li>
                      ))}
                    </ul>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cronograma;








