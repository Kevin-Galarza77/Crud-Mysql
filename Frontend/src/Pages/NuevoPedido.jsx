import React from 'react'
import Formulario from '../Components/formulario';

const ActualizarPedido = () => 
{
  
  return (
    <div className='container-fluid d-flex justify-content-center align-items-center flex-column'>
      <h2 className='display-6 border-bottom text-center w-75 border-secondary pb-3'>Nuevo Pedido</h2>
      <Formulario/>
    </div>
  )
}

export default ActualizarPedido