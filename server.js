var express = require("express");
var bodyParser = require("body-parser");
//var mysql = require("mysql");
var exphbs = require("express-handlebars");
//var routes = require("./controllers/burgersController.js");
var db = require("./models");


var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

/*


app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
*/

//app.use(routes);

//require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});