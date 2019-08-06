require("dotenv").config();
var connection = require("./connection.js");

function objToSql(ob) {
    var arr = [];
  
    for (var key in ob) {
      var value = ob[key];

      if (Object.hasOwnProperty.call(ob, key)) {

        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }

        arr.push(key + "=" + value);
      }
    }

    return arr.toString();
}

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM ??;";
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    insertOne: function(table, col, val, cb) {
        var queryString = "INSERT INTO " + table + " (" + col.toString() + ") VALUES (?);";
        connection.query(queryString, [val], function (err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    updateOne: function(table, objColVal, condition, cb) {
        var queryString = "UPDATE " + table + " SET " + objToSql(objColVal) + " WHERE " + condition;
        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });

    }
};

module.exports = orm;
