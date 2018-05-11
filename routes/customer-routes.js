var db = require("../models");

module.exports = function (app) {

  app.post("/customers", function (req, res) {
    console.log(req.body);
    db.Customer.create({
        name: req.body.name

      })
      .then(function (dbCustomer) {
        res.json(dbCustomer);
      });
  });


};