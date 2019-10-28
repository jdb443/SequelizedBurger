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

router.get("/", function(req, res) {
    db.Burger.findAll().then(function(data){
        var dataOb = {
            burgers: data
        };
        console.log(dataOb);
        res.render('index', dataOb);
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
        // function() {
        //     res.send('Thank you for your order!');
        // }
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

router.post("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log(condition);
    db.Burger.update({
            devoured: true
        },
        {
            where: {
                id: req.params.id
            }
        }).then(function(result) {
            res.redirect("/");
        });
});

router.delete("/api/burgers/:id", function(req, res) {
    console.log(req.params.id);
    // We just have to specify which todo we want to destroy with "where"
    db.Burger.destroy({
        where: {
            id: req.params.id
        }
        }).then(function(result) {
            res.redirect("/");
        });

  });

module.exports = router;