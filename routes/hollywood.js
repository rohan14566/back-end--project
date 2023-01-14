const express=require("express");
const hollywoodRouter=require('../controllers/hollywood')
const router=express.Router();
 
router.get('/hollywood/dataHollywoodController',hollywoodRouter.dataHollywoodController)
router.get('/hollywood/data1HollywoodController',hollywoodRouter.data1HollywoodController)
module.exports=router