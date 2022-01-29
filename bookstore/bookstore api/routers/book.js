const express= require("express");

const controller=require("../controller/book");


const router= express.Router();
router.get('/',controller.getAll);

router.post('/',controller.postone());

module.exports=router;
