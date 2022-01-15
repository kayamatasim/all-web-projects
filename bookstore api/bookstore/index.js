const express=require("express");
const server =express();
server.listen(3100);
server.get("/",(req,res)=>{
    res.send("hello from server asim")
});

console.log("server is listening on ahahaha")