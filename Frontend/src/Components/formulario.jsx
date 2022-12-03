import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from "axios";


const Formulario = ({ pedido }) => {

    const navigate = useNavigate()
    const [cliente, setCliente] = useState([])

    const consultarPedidos = async()=>{
        try {
          const peticion2=await fetch("http://localhost:8088/clientes/");
          const repuest2a=await peticion2.json();

          setCliente(repuest2a);

          console.log(repuest2a)

        } catch (error) {
          console.log(error);
        }
      }
    
    const [form, setForm] = useState({
        nombre: pedido?.nombre ?? "",
        id: pedido?.id ?? "",
        dniFK: pedido?.dniFK ?? "",
        nombre: pedido?.nombre ?? "",
        descripcion: pedido?.descripcion ?? "",
        fecha: pedido?.fecha ?? ""
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault()

        if (pedido?.id) {
            const url = `http://localhost:8000/pedidos/${pedido.id}`
            await axios.put(url, form)
        }else{
            const url = `http://localhost:8000/pedidos/`
            await axios.post(url, form)
        }
        navigate('/Pedidos')

    }

    useEffect(() => {

        consultarPedidos();
     
    
      }, [])


    return (

        <div className='mt-10 px-5 py-10 rounded-lg container-fluid d-flex justify-content-center align-items-center'>

            <form onSubmit={handleSubmit} className="shadow-lg d-flex justify-content-center align-items-center flex-column p-4 w-50 bg-light">
                <div className='d-flex justify-content-between align-items-center w-100'>
                    <label
                        htmlFor='fecha'
                        className='fs-6'>Fecha</label>
                    <input
                        type="date"
                        className='form-control m-2 text-end w-50'
                        placeholder='Describe los fecha'
                        name='fecha'
                        value={form.fecha}
                        onChange={handleChange} required />
                </div>
                <div className='d-flex justify-content-between align-items-center w-100'>
                    <label
                        htmlFor='id'
                        className='fs-6'>Código</label>
                    <input
                        id='id-codigo'
                        type="text"
                        className='form-control m-2 text-end w-50'
                        placeholder='Código del Pedido'
                        name='id'
                        value={pedido?.id ? form.id : "Código automatico"}
                        onChange={handleChange} required
                        disabled
                    />
                </div>
                <div className='d-flex justify-content-between align-items-center w-100'>
                    <label
                        htmlFor='dniFK'
                        className='fs-6'>DNI </label>
                    <select
                        id='dniFK'
                        type="dniFK"
                        className='form-control m-2 text-end w-50'
                        placeholder='DNI del Cliente'
                        name='dniFK'
                        value={form.dniFK}
                        onChange={handleChange} required>
                            <option value="">Seleccione...</option>
                            {
                                cliente.map(e=>(
                                    <option value={e.dni}>{e.dni}</option>
                                ))
                            }
                        </select>
                </div>
                {/* <div className='d-flex justify-content-between align-items-center w-100'>
                    <label
                        htmlFor='nombre'
                        className='fs-6'>Cliente </label>
                    <select id='nombre'
                        className='form-control m-2 text-end w-50'
                        name='nombre'
                        onChange={handleChange} required>
                            <option value="">Seleccione...</option>
                            
                        </select>
                </div> */}
                <div className='d-flex justify-content-between align-items-center w-100'>
                    <label
                        htmlFor='descripcion'
                        className='fs-6'>Descripción </label>
                    <textarea
                        id='descripcion'
                        type="tel"
                        className='form-control m-2 text-end w-75'
                        name='descripcion'
                        value={form.descripcion}
                        onChange={handleChange} required
                    />
                </div>

                <input
                    id='fecha'
                    type="submit"
                    className='btn btn-success m-3'
                    value={pedido?.id ? 'Actualizar' : 'Registrar'}
                    on
                />

            </form>
        </div>
    )
}

export default Formulario