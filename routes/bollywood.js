const express=require("express");
const bollywoodRouter=require('../controllers/bollywood')
const router=express.Router();
router.get('/bollywood/dataBollywoodController',bollywoodRouter.dataBollywoodController);
router.get('/bollywood/data1BollywoodController',bollywoodRouter.data1BollywoodController);

module.exports=router