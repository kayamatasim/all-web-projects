const db = require('mongodb');
const mongodbconfig=require('../config/mogodb');
exports.getAll=(cb)=>{
    const collection=mongodbconfig.getcollection('books');
    collection.find().toArray().then((books)=>{
           cb(books) 
    }).catch(err=>{console.log(err)});
}

function giveBooks(books){
    cb(books);
}

exports.postone=(book)=>{
    const collection=mongodbconfig.getcollection('books');
    collection.insertOne(book).then(res=>console.log('record stored')).catch(err=>console.log(err));
    
}
