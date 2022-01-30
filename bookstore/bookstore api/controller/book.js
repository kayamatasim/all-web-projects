const repo=require('../repository/book')

 const model=require('../models/book.model');
const BookModel = require('../models/book.model');
 

exports.getAll=(req,res)=>{
    console.log('controller code is working fine get all method is called successfully')
    repo.getAll((books)=>{
           res.send(books);
           
             
    })
  
}


exports.postone=(req,res)=>{
    console.log('function to upload book')

     let book=req.body;
   console.log('done');
    res.send("done"+JSON.stringify(book));

    repo.postone(book);
    // repo.getAll((books)=>{
    //        res.send(books);
           
             
    // })
  
}
  
  

  
    
   


  

 

   

   
