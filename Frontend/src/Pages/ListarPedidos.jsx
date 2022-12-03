
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ListarPedidos = () => {

  const navigate = useNavigate()

  const [Pedidos, setPedidos] = useState([])

  // Peticion a ambas apis, para conseguir datos de la tabla pedidos y la tabla clientes
  const consultarPedidos = async () => {
    try {
      const peticion = await fetch("http://localhost:8000/pedidos/");
      const repuesta = await peticion.json();
      const peticion2 = await fetch("http://localhost:8088/clientes/");
      const repuest2a = await peticion2.json();

      // Union de ambas tablas para conseguir el nombre del cliente a base del dniFK
      for (let i = 0; i < repuesta.length; i++) {
        for (let j = 0; j < repuest2a.length; j++) {
          if (repuesta[i].dniFK == repuest2a[j].dni) {
            repuesta[i]['nombre'] = repuest2a[j].nombre;
          }
        }
      }


      setPedidos(repuesta);
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {

    consultarPedidos();


  }, [])

  // Eliminar el pedido especificado
  const deletePedido = async (id) => {
    if (confirm("¿Estas seguro de eliminar este Pedido?")) {
      await axios.delete(`http://localhost:8000/pedidos/${id}`)
      consultarPedidos()
    }
  }

  return (
    // Lista de todos los pedidos en una tabla
    <div className='bg-primary h-100 bg-danger'>
      <button onClick={() => navigate("nuevo")} className="btn btn-success position-absolute btn-new start-50 ">Nuevo Pedido</button>
      <table className='w-100 table-auto shadow-lg bg-light'>
        <thead className='background-primary text-white text-center'>
          <tr>
            <th className='p-2'>Código del Pedido</th>
            <th className='p-2'>Fecha</th>
            <th className='p-2'>DNI</th>
            <th className='p-2'>Cliente</th>
            <th className='p-2'>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            Pedidos.map(pedido => (
              <tr key={pedido.id} className="text-center">
                <td className='p-3'>{pedido.id}</td>
                <td className='p-3'>{pedido.fecha}</td>
                <td className='p-3'>{pedido.dniFK}</td>
                <td className='p-3'>{pedido.nombre}</td>
                <td className='p-3'>
                  <button type='button' className='btn btn-primary' onClick={() => navigate(`/Pedidos/detalle/${pedido.id}`)}>Visualizar</button>
                  <button type='button' className='btn btn-secondary m-2'
                    onClick={() => navigate(`/Pedidos/editar/${pedido.id}`)}>Editar</button>
                  <button type='button' className='btn btn-danger' onClick={() => { deletePedido(pedido.id) }}>Eliminar</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default ListarPedidos