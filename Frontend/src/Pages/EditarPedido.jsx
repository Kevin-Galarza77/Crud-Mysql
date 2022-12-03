import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Formulario from '../Components/formulario';

const ActualizarPedido = () => {
  const { id } = useParams()
  let url = id
  const [pedido, setpedido] = useState({})

  // Peticion al api pero solamente un usuario
  useEffect(() => {
    const consultarpedido = async () => {
      try {
        const peticion = await fetch(`http://localhost:8000/pedidos/${url}`)
        const respuesta = await peticion.json()
        if (url == respuesta.id) {
          console.log(respuesta);
          setpedido(respuesta)
        }
      } catch (error) {
        console.log(error);
      }
    }
    consultarpedido()
  }, [])

  return (
    <div className='container-fluid d-flex justify-content-center align-items-center flex-column'>
      <h2 className='display-6 border-bottom text-center w-75 border-secondary pb-3'>Modificar Pedido</h2>
      {
        // comprobacion para saber si existe o no el usuario
        Object.keys(pedido).length > 0 ?
          (
            <Formulario pedido={pedido} />
          )
          :
          (
            <p className="text-white fs-2 p-3 rounded-3  bg-danger">No existe los datos de este pedido</p>
          )
      }
    </div>
  )
}

export default ActualizarPedido