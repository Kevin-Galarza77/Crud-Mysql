//importamos el Modelo
import  { clienteModel, pedidoModel } from "../models/apiModel.js"

//** Métodos para el CRUD **/

//Mostrar todos los registros de los pedidos

export const getAllPedidos = async (req, res) => {
    try {
        const Pedidos = await pedidoModel.findAll()
        res.json(Pedidos)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//Mostrar todos los registros de los clientes
export const getAllClientes = async (req, res) => {
    try {
        const clientes = await clienteModel.findAll()
        res.json(clientes)
    } catch (error) {
        res.json( {message: error.message} )
    }
}


//Mostrar un registro
export const getPedido = async (req, res) => {
        try {
            const Pedido = await pedidoModel.findAll({
                where:{ id:req.params.id }
            })
            res.json(Pedido[0])
            
        } catch (error) {
            res.json( {message: error.message} )
        }
}
//Crear un registro
export const createPedido = async (req, res) => {
    try {
       await pedidoModel.create(req.body)
       res.json({
           "message":"¡Registro creado correctamente!"
       })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Actualizar un registro
export const updatePedido = async (req, res) => {
    try {
        await pedidoModel.update(req.body, {
            where: { id: req.params.id}
        })
        res.json({
            "message":"¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Eliminar un registro
export const deletePedido = async (req, res) => {
    try {
        await pedidoModel.destroy({ 
            where: { id : req.params.id }
        })
        res.json({
            "message":"¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}