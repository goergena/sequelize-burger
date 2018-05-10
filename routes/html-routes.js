var db = require("../models");

module.exports = function (app) {

  app.get("/", function (req, res) {
    db.Burger.findAll({})
      .then(function (dbBurger) {
        res.render("index", {
          burgs: dbBurger
        });
      });
  });

  app.post("/burgers", function (req, res) {
    console.log(req.body);
    db.Burger.create({
        burger: req.body.burgerTOWN,

      })
      .then(function (dbBurger) {
        res.json(dbBurger);
      });
  });

  app.put("/burgers/:id", function (req, res) {
    db.Burger.update({
        eaten: true
      }, {
        where: {
          id: req.params.id
        }
      })
      .then(function (dbBurger) {
        res.json(dbBurger);
      });
  });
};