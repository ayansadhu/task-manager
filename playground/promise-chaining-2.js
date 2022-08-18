require('../src/db/mongoose')
const Task = require('../src/models/task')


// Task.findByIdAndDelete('62f4ca198321281a12c85753').then((task)=>{
//     console.log(task)
//     return Task.countDocuments({completed : false})

// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log('Error',e)
// })

const deleteTaskAndCount = async(id) =>{
    const task = await Task.findByIdAndDelete(id)
    const count= await Task.countDocuments({completed : false})
    return count
}

deleteTaskAndCount('62fcae824b7e8eeaa3297a59').then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})