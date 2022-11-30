const express = require('express');

const db = require('./utils/database')

const userRouter = require('./tasks/users.router')

const port = 9000; //http://localhost:9000/users

const app = express();

app.use(express.json());

db.authenticate()
    .then(() => console.log('DataBase Succesfully athenticated'))
    .catch((err) => console.log(err))

db.sync()
    .then(() => console.log('DataBase Synced succesfully'))
    .catch((err) => console.log(err))

app.use('/', userRouter) 

app.listen(port, () => {
    console.log(`Server has started at port ${port}`);
})