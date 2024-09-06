const express = require('express')
const dbConnect = require('./mongodb')
const mongoDb = require('mongodb')

const app = express()


app.use(express.json());



app.get('/', async (req, res) => {

    let data = await dbConnect()
    data = await data.find().toArray()
    console.log(data)
    res.send(data)
});


app.post('/',async (req, res) => {

let data = await dbConnect();


    let result = await data.insertOne(req.body)
   
    console.log(result)

    console.log(req.body)
    res.send(req.body)

})


app.put('/:name',async(req,res)=>{
    
    let data = await dbConnect()
    let result = data.updateOne(
        {name: req.params.name},
        {$set: req.body}
    )
  
    console.log(req.body)
res.send({result:"updated"})


})


app.delete('/:id',async(req,res)=>{

    console.log(req.params.id)
    const data =await  dbConnect();
    let result = await data.deleteOne({_id:new mongoDb.ObjectId(req.params.id)})
    res.send(result)




})

app.listen(8080)