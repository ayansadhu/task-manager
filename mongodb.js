//CRUD create read update delete

// const mognodb= require('mongodb')
// const mongoClient= mognodb.MongoClient
const {MongoClient,ObjectId} = require('mongodb')
//const  connectionURL= 'mongodb://127.0.0.1:27017'
const  connectionURL= 'mongodb+srv://ayansadhu:1qaz2wsx@cluster0.dxmnhxk.mongodb.net/?retryWrites=true&w=majority'


const database= 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client)=>{
    if (error){
        return console.log('Unable to connect to database')
    }
    
    const db= client.db(database)

    
    // db.collection('users').insertOne({
    //     name: 'Ayan',
    //     age: 28
    // },(error, result)=>{
    //     if (error){
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.insertedId)
    // })

    // db.collection('tasks').insertMany([{
    //     description : 'Task1',
    //     completed : true
    // },{
    //     description: 'Task2',
    //     completed : false
    // },{
    //     description: 'Task3',
    //     completed: false
    // }], (error, result)=>{
    //     if (error){
    //         return console.log('Unable to insert documents')
    //     }
    //     console.log(result.insertedIds)
    // })

    // db.collection('tasks').findOne({description :'Task1'}, (error, result)=>{
    //     if (error){
    //         console.log('Unable to fetch')
    //     }
    //     console.log(result)
    // })

    // db.collection('tasks').find({description: 'Task1'}).toArray((error, users)=>{
    //     console.log(users)
    // })

    // db.collection('tasks').updateOne({
    //     _id: new ObjectId('62f37cd6ead235a8a18944a4')
    // }, {
    //     $set: {
    //         description : 'Task4'
    //     }
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({ 
    //     completed : false
    //  }, {
    //     $set : {
    //         completed: true
    //     }
    //  }).then((result)=>{
    //     console.log(result)
    //  }).catch((error)=>{
    //     console.log(error)
    //  })

    // db.collection('tasks').deleteOne({
    //     description : 'Task4'
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })
})