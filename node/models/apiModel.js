import db from "../database/db.js";
import { DataTypes } from "sequelize";

const pedidoModel = db.define("Pedidos",{
    id : {type: DataTypes.STRING,primaryKey: true},
    fecha: {type: DataTypes.STRING},
    descripcion: {type: DataTypes.STRING},
    dniFK: {type: DataTypes.STRING}
},{timestamps: false})


export default pedidoModel