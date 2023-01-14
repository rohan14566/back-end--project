const express=require("express");
const homeController=require("../controllers/home")

const router=express.Router();
router.get('/home/data1HomeController',homeController.data1HomeController);
router.get('/home/dataHomeController', homeController.dataHomeController);


module.exports=router;