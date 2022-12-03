import {  BrowserRouter,  Routes,  Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import ActualizarPedido from "./Pages/EditarPedido";
import ListarPedidos from "./Pages/ListarPedidos";
import Login from "./Pages/Login";
import MostrarPedido from "./Pages/MostrarPedido";
import NuevoPedido from "./Pages/NuevoPedido";
function App() {

  return (
    
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />}>
        </Route>

        <Route path="/Pedidos" element={<Dashboard />}>
          <Route index element={<ListarPedidos/>}/>
          <Route path="detalle/:id" element={<MostrarPedido />} />
          <Route path="editar/:id" element={<ActualizarPedido />} />
          <Route path="nuevo" element={<NuevoPedido />} />
        </Route>

        {/* 

        <Route path="/pacientes" element={<Dashboard />}>
          <Route index element={<ListarPedidos />} />
          <Route path="detalle/:id" element={<MostrarPaciente />} />
          <Route path="nuevo" element={<NuevoPaciente />} />
          <Route path="editar/:id" element={<ActualizarPaciente />} />
        </Route> */}

      </Routes>
    </BrowserRouter>



  )
}

export default App
