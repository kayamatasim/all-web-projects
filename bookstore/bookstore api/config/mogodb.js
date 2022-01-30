const mongodb = require("mongodb");

// Step 2: Get URL
const url="mongodb+srv://Asimsheikh:Asim%40123@cluster0.boevp.mongodb.net/bookstore?retryWrites=true&w=majority"

// Step 3: Create Mongodb client
const mongoClient = mongodb.MongoClient;

// Step 4: Connect to mongodb

var dbClient;

exports.connect = ()=>{
    console.log("Connecting...")
    mongoClient.connect(url)
    .then((client)=>{
        dbClient = client;
        console.log("MongoDB is connected");
    })
    .catch(err=>{console.log(err)});
} 

exports.getcollection = (name)=>{
    return dbClient.db('bookstore').collection(name);
}