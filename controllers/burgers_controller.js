require("dotenv").config();
var express = require("express");
var router = express.Router();
var db = require("../models/index.js");

// router.get("/", function(req, res) {
//     burger.selectAll(function(data) {
//         var dataOb = {
//             burgers: data
//         };
//         console.log(dataOb);
//         res.render("index", dataOb);
//     });
// });

// get route -> index
/* router.get("/", function(req, res) {
    // send us to the next get function instead.
    res.redirect("/burgers");
  }); */


router.get("/burgers", function(req, res) {
    db.Burger.findAll()
    .then(function(data){
        // var dataOb = {
        //     burgers: data
        // };
        // console.log(dataOb);
        res.render('index',{burgers: data});
    });
});

// router.post("/api/burgers", function(req, res) {
//     burger.insertOne("burger_name", req.body.burger_name, function(result) {
//         res.json({id: result.insertId});
//     });
// });
router.post("/burgers/create", function(req, res) {
// req.body
    db.Burger.create({ name: req.body.addBurger, devoured: false}).then(
        function(addBurger) {
            console.log(addBurger);
            //res.send('Thank you for your order!');
            res.redirect("/");
        }
    );
  });

// router.put("/api/burgers/:id", function(req, res) {
//     var condition = "id = " + req.params.id;
//     console.log(condition);
//     burger.updateOne(
//         {
//             devoured: req.body.devoured
//         },
//         condition,
//         function(result) {
//             if (result.changedRows === 0) {
//                 // 404 Server Not Found ERROR
//                 return res.status(404).end();
//             }
//             // 200 OK ERROR
//             res.status(200).end();
//         }
//     );
// });

router.put("/api/burgers/:id", function(req, res) {
    //var condition = "id = " + req.params.id;
    console.log(condition);
    burger.update({
            devoured: req.body.devoured
        },
        {
            where: {
                id: req.params.id
            }
        }).then(function(result) {
            res.json("/");
        });
});

module.exports = router;