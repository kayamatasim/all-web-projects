const repo=require('../repository/book')

 const model=require('../models/book.model');
const BookModel = require('../models/book.model');
 

exports.getAll=(req,res)=>{
    console.log('controller code is working fine get all method is called successfully')
    repo.getAll((books)=>{
           res.send(books);
           
             
    })
  
}

exports.postone=()=>{
 return (req,res)=>{
    var book=new BookModel(req.name,req.auther,req.price,req.imgsrc);
    console.log(res)

    repo.postone().insert(book);

    console.log(book);
 }
   
  
  

  
    
   


  

 

   

   
}