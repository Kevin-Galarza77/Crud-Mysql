import express from "express"
import cors from 'cors'
//importamos la conexión a la DB
import db from "./database/db.js"
//importamos nuestro enrutador
import rutasClientes from './routes/routesCLientes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/clientes', rutasClientes)


try {
    await db.authenticate()
    console.log('Conexión exitosa a la DB')
 
} catch (error) {
    console.log(`El error de conexión es: ${error}`)
 
}

// app.get('/', (req, res)=>{
//     res.send(`Hola ${a}`)
// }) 

app.listen(8088, ()=>{
    console.log('Server UP running in http://localhost:8088/')
})