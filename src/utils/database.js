const { Sequelize } = require('sequelize')


const db = new Sequelize({
    dialect : 'postgres',
    host: 'localhost',
    database: 'users-db',
    username: 'postgres',
    password: 'pass',
    port: 5432, 
})




module.exports = db