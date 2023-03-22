var express = require("express");
var router = express.Router();
const { ObjectId } = require("mongodb");
var DataService = require("./../services/dataService");

router.get("/", async function(req,res){
    var dataService = new DataService();  
    var categories =  req.session.categories
    var discountFoods = req.session.discountFoods;
    if(req.query.category_id == '' || req.query.category_id == 0){
        var foods = await dataService.getFoodList();
        res.render("foodView/foodPage", { categoryList : categories, title_name: "All food", foodList : foods, discountFoodList : discountFoods});
    }
    else{
        var foodsByCategory = await dataService.getFoodByCategory(req.query.category_id);
        //var category = await dataService.getCategoryById(req.query.category_id);
        //return json(category);
        res.render("foodView/foodPage", { categoryList : categories, title_name: "foods", foodList : foodsByCategory, discountFoodList : discountFoods,});
    }
});

router.post("/findFood", async function(req,res){
    var dataService = new DataService();
    var categories =  req.session.categories
    var discountFoods = req.session.discountFoods;
    var findFoods = await dataService.findFood(req.body.food_name);
    var title_name = "Search results for: " + req.body.food_name;
    res.render("foodView/foodPage", { categoryList : categories, title_name, foodList : findFoods,  discountFoodList : discountFoods});
});
module.exports = router;
