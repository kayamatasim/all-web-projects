const express=require("express");
const server =express();
const mongoconnect=require("mongodb")
server.listen(3100);
const cors=require("cors");
const bookroutes=require("./routers/book");
server.use(express.json())

const mongodb=require("./config/mogodb")

server.use(cors("*"));
server.use('/api/book',bookroutes);


server.get("/",(req,res)=>{
    res.send("hello from server asim");
   
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Max-Age", "1800");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
    
});

mongodb.connect()

console.log("server is listening on ahahaha")

// server.use(express.json())
