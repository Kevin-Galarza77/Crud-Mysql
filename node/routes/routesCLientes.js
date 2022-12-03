import express from 'express'
import { getAllClientes } from '../controller/apiControllerClientes.js'
 
const router = express.Router();

router.get('/', getAllClientes)

export default router