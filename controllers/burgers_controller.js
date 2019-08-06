require("dotenv").config();
var express = require("express");
var router = express.Router();
var burger = require("../models/burgers.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var dataOb = {
            burgers: data
        };
        console.log(dataOb);
        res.render("index", dataOb);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne("burger_name", req.body.burger_name, function(result) {
        res.json({id: result.insertId});
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log(condition);
    burger.updateOne(
        {
            devoured: req.body.devoured
        },
        condition,
        function(result) {
            if (result.changedRows === 0) {
                // 404 Server Not Found ERROR
                return res.status(404).end();
            }
            // 200 OK ERROR
            res.status(200).end();
        }
    );
});

module.exports = router;