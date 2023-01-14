const express=require("express")
const foodRouter=require('../controllers/food')
const  router  = express.Router()
router.get('/food/dataFoodController',foodRouter.dataFoodController)
router.get('/food/data1FoodController',foodRouter.data1FoodController)

module.exports=router
