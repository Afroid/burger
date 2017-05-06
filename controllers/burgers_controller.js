var express = require("express");

var router = express.Router();
var orm = require("../config/orm");

module.exports = function (app) {
    app.get("/", function (req, res) {
        orm.selectAll(function(data){
          console.log(data);
          res.render("index", {result: data});
        });  

    });

    // app.get("", function(req, res){
    //   res.render("welcome");
    // });

    app.put("/add", function (req, res) {
      console.log(req.body);
      var date = new Date();
      orm.insertOne(req.body.burger_name, true, date);
      res.redirect("/");
    });

    app.put("/:id", function (req, res) {
      orm.updateOne(req.params.id);
      res.redirect("/");
    });
};

// Import the model (burger.js) to use its database functions.
// var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
// router.get("/", function(req, res) {
//   burger.all(function(data) {
    // var hbsObject = {
    //   burgers: data
    // };
    // console.log(hbsObject);
    // res.render("index", hbsObject);
//     res.render("index");
//   });
// });

// router.post("/", function(req, res) {
  // burger.create([
  //   "name", "sleepy"
  // ], [
  //   req.body.name, req.body.sleepy
  // ], function() {
  //   res.redirect("/");
  // });
// });

// router.put("/:id", function(req, res) {
  // var condition = "id = " + req.params.id;

  // console.log("condition", condition);

  // burger.update({
  //   sleepy: req.body.sleepy
  // }, condition, function() {
  //   res.redirect("/");
  // });
// });

// Export routes for server.js to use.
module.exports = router;