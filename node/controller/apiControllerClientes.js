//importamos el Modelo
import pedidos from "../models/apiModelClientes.js"

//** Métodos para el CRUD **/
//Mostrar todos los registros
export const getAllClientes = async (req, res) => {
    try {
        const Pedidos = await pedidos.findAll()
        res.json(Pedidos)
    } catch (error) {
        res.json( {message: error.message} )
    }
}