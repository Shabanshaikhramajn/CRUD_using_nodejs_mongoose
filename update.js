const dbConnect = require('./mongodb')


const updateData = async()=>{

    let data = await dbConnect()
    
    let result =await data.updateMany(
        {name:'note5'}, {
            $set :{name:'shaban',price:1200}
        }
    )
    
    console.log(result);
    


}



updateData()