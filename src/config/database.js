import { Sequelize } from 'sequelize'

//config database

class Database {
   constructor(){
    this.init()
   } 


// config a conexao

init() {
    this.db = new Sequelize({
        dialect: 'postgres',
        database: 'exemplo_glzg',
        username: 'exemplo_glzg_user',
        password: 'Rqmo97dAsotO6GhGHwap7RkL5xbTWO0S',
        host: 'dpg-dbh7c3jl550s7380cm0g-a.oregon-postgres.render.com',
            dialectOptions:{
                ssl:{
                    require: true,
                    rejectUnautorized:false
                }
            }
        })
    }
}   

export default new Database();