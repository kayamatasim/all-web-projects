const express= require("express");

const controller=require("../controller/book");


const router= express.Router();
router.get('/getall',controller.getAll);

router.post('/storebook',controller.postone);

module.exports=router;
