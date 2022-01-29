const express=require("express");


const bodyparser=require('body-parser')
const server =express();
server.listen(3100);
const cors=require("cors");
const bookroutes=require("./routers/book");
server.use(bodyparser.json());
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



// const corsOptions ={
//     origin:'http://localhost:3100', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
// server.use(cors(corsOptions));
mongodb.connect()
console.log("server is listening on ahahaha")