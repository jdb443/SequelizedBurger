require("dotenv").config();
var express = require("express");
var router = express.Router();

// var db = require("../models");
var db = require("../models/index.js");

router.get("/", function (req, res) {
    console.log("GET Called");
    db.burger.findAll().then(function (data) {
        var burgersData = {
            burgers: data
        };
        res.render("index", burgersData);
    });
});

router.put("/api/burgers/:id", function (req, res) {
    console.log("PUT Called: ", req.params.id);
    db.burger.update({
        devoured: true
    }, {
        where: {
            id: req.params.id
        }
    }).then(function (data) {
        var burgersData = {
            burgers: data
        };        
        res.render("index", burgersData);
    });
});

router.delete("/api/burgers/:id", function (req, res) {
    console.log("DELETE Called: ", req.params.id);
    db.burger.destroy({
        where: {
            id: req.params.id
        }
    }).then(function (data) {
        var burgersData = {
            burgers: data
        };
        res.render("index", burgersData);
    });
});

router.post("/api/burgers/", function (req, res) {
    console.log("POST Called ");
    db.Burger.create({
        burger_name: req.body.burger_name,
        devoured: false
    }).then(function (burgerData) {
        return res.json({ id: burgerData.id });
    });
});


// Export routes for server.js to use.
module.exports = router;