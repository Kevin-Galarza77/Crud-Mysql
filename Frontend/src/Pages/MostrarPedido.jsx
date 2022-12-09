import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';



const MostrarPedido = () => {

    const { id } = useParams()
    const [url, seturl] = useState(id)
    const [pedido, setpedido] = useState({})

    useEffect(() => {
        const consultarPedido = async () => {
            try {

                const peticion = await fetch(`http://localhost:8000/pedidos/${url}`);
                const repuesta = await peticion.json();
                const peticion2 = await fetch("http://localhost:8000/pedidos/clientes");
                const repuest2a = await peticion2.json();

                for (let j = 0; j < repuest2a.length; j++) {
                    if (repuesta.dniFK == repuest2a[j].dni) {
                        repuesta['nombre'] = repuest2a[j].nombre;
                    }
                }

                setpedido(repuesta);

            } catch (error) {
                console.log(error);
            }
        }
        consultarPedido()
    }, [])


    return (
        <div className='d-flex justify-content-center align-items-center flex-column container-fluid'>

            <h2 className='display-6 border-bottom text-center w-100 border-secondary pb-3'>Detalle del Pedido</h2>
            <hr />
            {
                Object.keys(pedido).length > 0 ?
                    (
                        <div className='mx-5 my-2 flex-column d-flex justify-content-start align-items-center'>
                            <div className='d-flex justify-content-between w-100 flex-wrap'>
                                <h6 className='text-dark fs-5 m-3 m-3'>Fecha  </h6>
                                <p className='fs-5 m-3'>{pedido.fecha}</p>
                            </div>
                            <div className='d-flex justify-content-between w-100 flex-wrap'>
                                <h6 className='text-dark fs-5 m-3 m-3'>Código  </h6>
                                <p className='fs-5 m-3'>{pedido.id}</p>
                            </div>
                            <div className='d-flex justify-content-between w-100 flex-wrap'>
                                <h6 className='text-dark fs-5 m-3 m-3'>DNI (Cliente)</h6>
                                <p className='fs-5 m-3'>{pedido.dniFK}</p>
                            </div>
                            <div className='d-flex justify-content-between w-100 flex-wrap'>
                                <h6 className='text-dark fs-5 m-3 m-3'>Cliente  </h6>
                                <p className='fs-5 m-3 text-end'>{pedido.nombre}</p>
                            </div>
                            <div className='d-flex justify-content-between w-100 flex-wrap'>
                                <h6 className='text-dark fs-5 m-3 m-3'>Descipción  </h6>
                                <p className='fs-5 m-3 text-end text-wrap'>{pedido.descripcion}</p>
                            </div>
                        </div>
                    )
                    :
                    (
                        <p className="text-white fs-2 p-3 rounded-3  bg-danger">No existe los datos de este pedido</p>
                    )
            }
        </div>
    )
}

export default MostrarPedido
