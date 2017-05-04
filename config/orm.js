// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
  selectWhere: function(tableInput, colToSearch, valOfCol) {
    // var queryString = "SELECT * FROM ?? WHERE ?? = ?";

    // connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
    //   return result;
    // });
  },


  insertOne: function(tableInput, colToSearch, valOfCol) {
    // var queryString = "SELECT * FROM ?? WHERE ?? = ?";

    // connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
    //   return result;
    // });
  },


  updateOne: function(tableInput, colToSearch, valOfCol) {
    // var queryString = "SELECT * FROM ?? WHERE ?? = ?";

    // connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
    //   return result;
    // });
  }
};

module.exports = orm;