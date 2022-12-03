import express from 'express'
import { createPedido, deletePedido, getAllPedidos, getPedido, updatePedido } from '../controller/apiController.js'
 
const router = express.Router();
// Estableciendo las direcciones de la url q nos daran la informacion
router.get('/', getAllPedidos)
router.get('/:id', getPedido)
router.post('/', createPedido)
router.put('/:id', updatePedido)
router.delete('/:id', deletePedido)

export default router