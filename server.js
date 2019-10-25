// require("dotenv").config();
// var express = require("express");
// const db = require('./models');
// var PORT = process.env.PORT || 8000;

// var app = express();

// app.use(express.static("public"));

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// var exphbs = require("express-handlebars");
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// var routes = require("./controllers/burgers_controller.js");

// app.use(routes);

// db.sequelize.sync(
//     // {force:true}
//     ).then(function(){
//     console.log('Connected to Database');
//     app.listen(PORT, function() {
//         console.log("App now listening at localhost:" + PORT);
//     });
// });

require("dotenv").config();

var express = require("express");
<<<<<<< HEAD
var db = require("./models"); 

=======
const db = require('./models');
>>>>>>> 915b8c10e9ac2fec51788dac84a999a24302575c
var PORT = process.env.PORT || 8000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgersController.js");

app.use(routes);

<<<<<<< HEAD
// Configure our database, if successful then start our app server so that it can begin listening to client requests
db.sequelize.sync({force : false }).then(function () {
  app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
});
=======
db.sequelize.sync({force:true}).then(function(){
    console.log('Connected to Database');
    app.listen(PORT, function() {
        console.log("App now listening at localhost:" + PORT);
    });
});
>>>>>>> 915b8c10e9ac2fec51788dac84a999a24302575c
