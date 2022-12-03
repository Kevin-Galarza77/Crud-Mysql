import db from "../database/db.js";
import { DataTypes } from "sequelize";

const clienteModel = db.define("clientes",{
    dni : {type: DataTypes.STRING,primaryKey: true},
    nombre: {type: DataTypes.STRING}
},{timestamps: false})


export default clienteModel