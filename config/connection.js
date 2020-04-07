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
  development: {
    username: process.env.DATAB_USER,
    password: process.env.DATAB_PASSWORD,
    database: process.env.DATAB_DATABASE,
    host: process.env.DATAB_HOST,
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql",
  },
};
