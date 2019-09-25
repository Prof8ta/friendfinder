var express = require("express");
// var path = require("path");
// var apiRoutes = require("./app/routing/apiRoutes");
// var htmlRoutes = require("./app/routing/htmlRoutes");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = 7000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(apiRoutes);
// app.use(htmlRoutes);



// require("./app/routing/apiRoutes")(app)
require("./app/routing/htmlRoutes")(app)



app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

