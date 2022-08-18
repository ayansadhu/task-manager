const mongoose = require('mongoose')
const Task = require('../models/task')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    // useNewUrlParser: true,
    // useCreateIndex: true
})



// const me = new User({
//     name: '   Amit     ',
//     email: 'amit@gmail.com',
//     password: 'pass1234'
// })

// me.save().then((me)=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log('Error ', error)
// })



// const task1 = new Task({
//     description : 'Task3',
//     completed : false
// })

// task1.save().then((task)=>{
//     console.log(task)
// }).catch((error)=>{
//     console.log('Error ',error)
// })