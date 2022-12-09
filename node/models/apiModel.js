import db from "../database/db.js";
import { DataTypes } from "sequelize";

// Estableciendo los campos que nuestra tabla en mysql tiene 
export const pedidoModel = db.define("Pedidos",{
    id : {type: DataTypes.STRING,primaryKey: true},
    fecha: {type: DataTypes.STRING},
    descripcion: {type: DataTypes.STRING},
    dniFK: {type: DataTypes.STRING}
},{timestamps: false});


export const clienteModel = db.define("clientes",{
    dni : {type: DataTypes.STRING,primaryKey: true},
    nombre: {type: DataTypes.STRING}
},{timestamps: false});


