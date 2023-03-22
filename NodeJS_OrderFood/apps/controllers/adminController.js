var express = require("express");
const { ObjectId } = require("mongodb");
var router = express.Router();
var User = require("./../models/user");
var AdminService = require("./../services/adminService");
var config = require('../../config/setting.json');
var verifyToken = require("../util/VerifyToken");
const _ = require('lodash');
//jwt
const jsonwebtoken = require("jsonwebtoken");
const jwtExpirySeconds = 300

router.get("/", function (req, res) {
    res.render("adminView/adminPage");
});
router.get("/data", async function (req, res) {
    var adminService = new AdminService();
    var data = await adminService.getAdmin();
    res.json({data});
});

module.exports = router;
