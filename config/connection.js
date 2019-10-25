<<<<<<< HEAD
// require("dotenv").config();
// var mysql = require("mysql");
// var keys = require("../keys.js");

// var connection;

// if (process.env.JAWSDB_URL){
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//   connection = mysql.createConnection(keys.MySQL);
// }

// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// module.exports = connection;
=======
require("dotenv").config();
// var mysql = require("mysql");
// var keys = require("../keys.js");

// var connection;

// if (process.env.JAWSDB_URL){
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//   connection = mysql.createConnection(keys.MySQL);
// }

// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// module.exports = connection;
module.exports = {
    "development": {
      "username": process.env.DATA_USER,
      "password": process.env.DATA_PASSWORD,
      "database": process.env.DATA_DATABASE,
      "host": process.env.DATA_HOST,
      "dialect": "mysql"
    },
    "test": {
      "username": "root",
      "password": null,
      "database": "database_test",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "production": {
      "use_env_variable": "JAWSDB_URL",
      "dialect": "mysql"
    }
  }
>>>>>>> 915b8c10e9ac2fec51788dac84a999a24302575c
