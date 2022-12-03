import {Sequelize} from 'sequelize'


const db = new Sequelize("kevinsan_pedidos2","kevinsan_ped_1","LDU2010ldu",{
    host:"mysql-kevinsan.alwaysdata.net",
    dialect:"mysql"
})


export default db