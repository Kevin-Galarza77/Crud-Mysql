import db from "../database/db.js";
import { DataTypes } from "sequelize";

// Estableciendo los campos que nuestra tabla en mysql tiene 
const clienteModel = db.define("clientes",{
    dni : {type: DataTypes.STRING,primaryKey: true},
    nombre: {type: DataTypes.STRING}
},{timestamps: false})


export default clienteModel