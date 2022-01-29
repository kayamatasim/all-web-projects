const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://Asimsheikh:Asimsheikh@cluster0.boevp.mongodb.net/bookstore/emp',(err)=>{console.log(JSON.stringify(err))});
module.exports=mongoose;

