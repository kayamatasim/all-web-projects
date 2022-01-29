const mongodb=require('mongodb');



const url="mongodb+srv://Asimsheikh:Asim%40123@cluster0.boevp.mongodb.net/bookstore?retryWrites=true&w=majority"

const mongoclient=mongodb.MongoClient;

var dbclient;
exports.connect= ()=>{
    mongoclient.connect(url).then((client)=>{
        dbclient=client;
    console.log("mongodb is connected")
}).catch(err=>{console.log(err)});

}


exports.getcollection=(name)=>{
  return dbclient.db('bookstore').collection(name);
}

