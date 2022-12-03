import express from 'express'
import { getAllClientes } from '../controller/apiControllerClientes.js'
 
const router = express.Router();
// Estableciendo las direcciones de la url q nos daran la informacion
router.get('/', getAllClientes)

export default router