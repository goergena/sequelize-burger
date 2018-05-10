// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/", function(req, res) {
    db.Burger.findAll({})
      .then(function(dbBurger) {
        res.render("index", {burgs: dbBurger});
      });
  });


  // POST route for saving a new post
  app.post("/burgers", function(req, res) {
    console.log(req.body);
    db.Burger.create({
      burger: req.body.burgerTOWN,
     
    })
      .then(function(dbBurger) {
        res.json(dbBurger);
      });
  });


  // PUT route for updating posts
  app.put("/burgers/:id", function(req, res) {
    db.Burger.update({
      eaten: true}, {
        where: {
          id: req.params.id
        }
      })
      .then(function(dbBurger) {
        res.json(dbBurger);
      });
  });
};
