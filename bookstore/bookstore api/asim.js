// var http= require("http");
// http.createServer((req,res)=>{
//     res.end("welcome to a node js stand alone server and i am useing nodemon as well ");

// }).listen(420);


var fs= require("fs");


fs.appendFile("text",'somethihg \n',function(){console.log('data saved')});


fs.readFile("text","utf-8",function(err,data){
    console.log(data)
})

