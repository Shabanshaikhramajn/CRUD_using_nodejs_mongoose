const {mongoClient, MongoClient} = require('mongodb')




const database   = 'ecom'
const url = 'mongodb://localhost:27017'

const client = new MongoClient(url);


async function dbConnect(){
    let result =await client.connect();
  let db =   result.db(database)
    return db.collection('products')
  

}
module.exports = dbConnect;