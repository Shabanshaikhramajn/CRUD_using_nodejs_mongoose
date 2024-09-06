const dbConnect = require('./mongodb')

const insert = async()=>{
    const db = await dbConnect()
    
const result = await db.insertMany(
   [ 
    {name:'note5',brand:'vivo',price:350,category:'tablet'},
    {name:'gui',brand:'samsung',price:350,category:'tablet'},
    {name:'s20',brand:'techno',price:350,category:'mobile'}

   ]
)
if(result.acknowledged){

    console.log("data inserted")
} 

// console.log(result.acknowledged)
    
}

insert()