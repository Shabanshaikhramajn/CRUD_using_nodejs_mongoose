module.exports =  reqFilter=(req,res,next)=>{

    if(!req.query.age){

        res.send("please provide age")


    }
    else if(req.query.age<18){


        res.send("abe chota hai tu")
    }
    
    else{

        next()
    }
   
    console.log('reqFilter')
}