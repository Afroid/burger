// Import MySQL connection.
var connection = require("./connection");

// Object for all our SQL statement functions.
var orm = {
  selectAll: function(cb){
    connection.query("SELECT * FROM burgers", function(err, data){
      if(err)throw err;
      cb(data);
      console.log(data);
    });
  
  },

  insertOne: function(name, devoured, data){
    connection.query("INSERT INTO burgers(burger_name, devoured, data) VALUE(? ? ?)", function(err, data){
      if(err) throw err;
      console.log("Data has been posted");
    });
  },

  updateOne: function(id) {
    connection.query("UPDATE burgers SET devoured=false WHERE ID = ?" , [id],function (err, data) {
      if(err)throw err;
      console.log("Data was updated in the database");

    });
  }
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