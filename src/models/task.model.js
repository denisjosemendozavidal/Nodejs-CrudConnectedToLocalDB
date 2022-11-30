const {DataTypes} = require('sequelize')

const db = require('../utils/database')

/*
Structure: 

{
	id: 1,
	first_name: 'string',
	last_name: 'string',
	email: 'string',
	password: 'string',
	birthday: 'YYYY/MM/DD'
}

*/ 

const Tasks = db.define('tasks', { //This is like doing a create table, the parameter tasks will be the name of the table
    id: { //This is meant to be serialize but since that does not exist in Datatypes, need to use some extra settings to make it happen
        type: DataTypes.INTEGER,
        autoIncrement: true, //This is to make it serial
        primaryKey: true,
    },
    first_name: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
	email: {
        type: DataTypes.STRING,
        allowNull: false, //This is to make this value mandatory
        unique: true,
    },
	password: {
        type: DataTypes.STRING(8),
        allowNull: false,
    },
	birthday: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
}, {
    timestamps: false,
})

module.exports = Tasks