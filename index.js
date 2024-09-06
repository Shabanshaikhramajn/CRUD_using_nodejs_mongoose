const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/ecom")

const ProdutSchema = new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String
})

const updateInDB = async ()=>{
    const Product =  mongoose.model('products',ProdutSchema)
    let data = await Product.updateMany(
        {name:'shaban'},
        {
            $set:{price:550, name:"shaikh"}
        }
    )
    console.log(data)
}
// updateInDB()

const deleteInDB = async()=>{
    const Product = mongoose.model('products',ProdutSchema)
    let data = await Product.deleteMany({name:'shaikh'})
    console.log(data)

}
// deleteInDB()


const insertInDB = async()=>{
    const Product = mongoose.model('products',ProdutSchema)
    let data = await Product.insertMany({name:'shaban',price:350,brand:'sund',category:'buttonwala mobile'})
    console.log(data)

}

insertInDB()







const findInDB = async()=>{
    const Product = mongoose.model('products',ProdutSchema)
    let data = await Product.find({name:'shaban'})
    console.log(data)
}


