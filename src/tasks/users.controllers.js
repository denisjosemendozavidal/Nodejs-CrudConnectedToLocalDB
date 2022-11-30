const Tasks = require('../models/task.model')

const usersDB = [];

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

let id = 1; 

const findAllUsers = async() => { 

  const data = await Tasks.findAll()

  return data
}

const findUserById = async(id) => {
    const user = await Tasks.findOne({  
      where: {
        id: id,
      }
    })

    return user
}

const createUser = async(obj) => { 
    const newUser = await Tasks.create({
      first_name: obj.first_name,
      last_name: obj.last_name,
      email: obj.email,
      password: obj.password,
      birthday: obj.birthday
  })

    return newUser
}

const deleteUser = async(id) => {

  const data = await Tasks.destroy({
    where: {
      id : id,
    }
  })
  
    return data

  }

const updateUser = async(obj, id) => {

  const data = await Tasks.update(obj, {
    where : {
      id: id,
    }
  })

  return data 

}

module.exports = { 
    findAllUsers,
    findUserById,
    createUser,
    deleteUser,
    updateUser,
}