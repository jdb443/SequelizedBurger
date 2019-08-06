var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgerssq", function(res) {
            cb(res);
        });
    },
    insertOne: function(col, val, cb) {
        orm.insertOne("burgerssq", col, val, function(res) {
            cb(res);
        });
    },
    updateOne: function(objColVal, condition, cb) {
        orm.updateOne("burgerssq", objColVal, condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;