const { response } = require('express')
const taskControllers = require('./users.controllers')


const getAllUsers = (request, response) => {
    taskControllers.findAllUsers()
        .then((data) => {
            response.status(200).json(data)
        })
        .catch((err) => {
            response.status(400).json({message: err.message})
        })
}

const getUserById = (request, response) => {
    const id = request.params.id
    taskControllers.findUserById(id)
        .then((data) => {
            if (data) {
                response.status(200).json(data)
            } else {
                response.status(404).json({message: 'Invalid ID'})
            }
        })
        .catch((err) => {
            response.status(404).json({message: err.message})
        })

    
}

const postUser = (request, response) => {
    const {first_name, last_name, email, password, birthday} = request.body

    taskControllers.createUser({first_name, last_name, email, password, birthday})
        .then((data) => {
            response.status(201).json(data) 
            
        })
        .catch((err) => {
            response.status(404).json({message: err.message})
        })

}

const deleteUser = (request, response) => {
    const id = request.params.id
    
    taskControllers.deleteUser(id)
        .then((data) => {
            if (id) {
                response.status(200).json(data)
            } else {
                response.status(404).json({message: 'Invalid ID'})
            }
        })
        .catch((err) => {
            response.status(404).json({message: err.message})
        })

   
}

const patchUser = (request, response) => {
    const id = request.params.id

    const {first_name, last_name, email, password, birthday} = request.body 

    taskControllers.updateUser({first_name, last_name, email, password, birthday}, id)
        .then((data) => {
            if (data) {
                response.status(200).json({message: 'User Updated.!'})
            } else {
                response.status(404).json({message: 'Id must match / Invalid ID'})
            }
        })
        .catch(() => {
            response.status(404).json({message: err.message})
        })



}

module.exports = {
    getAllUsers,
    getUserById,
    postUser,
    deleteUser,
    patchUser,
}