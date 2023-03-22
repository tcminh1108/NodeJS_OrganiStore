var express = require("express");
var router = express.Router();
const { ObjectId } = require("mongodb");
var DataService = require("./../services/dataService");

router.get("/", async function(req,res){
    var dataService = new DataService();
    req.session.categories = await dataService.getCategoryList();
    req.session.discountFoods = await dataService.getDiscountFoodList();
    var discountFoods = req.session.discountFoods;
    var categories =  req.session.categories
    res.render("homeView/homePage", { categoryList : categories, foodList: discountFoods});
});

router.get("/contact", function(req,res){
    res.render("contact");
});
router.get("/blog", function(req,res){
    res.render("blog");
});
module.exports = router;
