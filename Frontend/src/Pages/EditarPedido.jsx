import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Formulario from '../Components/formulario';

const ActualizarPedido = () => 
{
  const {id} = useParams()
  const [url, setURL] = useState(id)
  const [pedido, setpedido] = useState({})
  
  useEffect(() => 
  {
    const consultarpedido = async() => {
      try 
      {
        const peticion = await fetch(`http://localhost:8000/pedidos/${url}`)
        const respuesta = await peticion.json()
        if(url == respuesta.id)
        {
          console.log(respuesta);
          setpedido(respuesta)
        }
      } catch (error) 
      {
        console.log(error);
      }
    }
    consultarpedido()
  },[])
  
  return (
    <div className='container-fluid d-flex justify-content-center align-items-center flex-column'>
      <h2 className='display-6 border-bottom text-center w-75 border-secondary pb-3'>Modificar Pedido</h2>
      {
        Object.keys(pedido).length > 0 ?
          (
            <Formulario pedido={pedido}/>
          )
          :
          (
            <p className="bg-red-900 border-t border-b border-red-900 text-white px-4 py-3 m-5 text-center rounded-lg">No existe los datos de ese pedido</p>
          ) 
      }
    </div>
  )
}

export default ActualizarPedido