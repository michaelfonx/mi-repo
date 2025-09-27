import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PaginaInicio from './components/pages/PaginaInicio';
import BarraNavegacion from './components/pages/BarraNavegacion';
import Carrusel from './components/pages/Carrusel';
import BarraPrincipal from './components/pages/BarraPrincipal';
import ContactenosFooter from './components/pages/ContactenosFooter';
import InisiarSesion from './components/pages/IniciarSesion';
import Registrarse from './components/pages/Registrarse';
import ProductosAtaud from './components/pages/ProductosAtaud';
import AcercaDeNosotros from './components/pages/AcercaDeNosotros';
import Dashboard from './components/Dashboard';
import Cronograma from './components/cronograma/cronograma';
import Reportes from './components/reportes/Reportes';



import SideBar from './components/SideBar';
import BarraCliente from './components/clientes/BarraCliente';
import Cliente from './components/clientes/Cliente';
import AgregarCliente from './components/clientes/AgregarCliente';
import EditarCliente from './components/clientes/EditarCliente';

function App() {
  return (
    <Router>
      <SideBar />

      <div style={{ marginLeft: "200px", background: "#D8CFE8", height: "100vh" }}>
        <BarraCliente />

        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route path="/clientes" element={<Cliente />} />
          <Route path="/clientes/agregar" element={<AgregarCliente />} />
          <Route path="/clientes/editar" element={<EditarCliente />} />
          <Route path="/cronograma" element={<Cronograma />} />
          <Route path="/Reportes" element={<Reportes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


