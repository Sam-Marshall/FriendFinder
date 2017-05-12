//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var friends = [];

var app = express();

app.set('port', (process.env.PORT || 5000));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static(__dirname + "/app/public"));

app.listen(app.get('port'), function() {
    console.log("App listening on PORT " + app.get('port'));
});

require('./app/routing/htmlRoutes')(app);
require('./app/routing/apiRoutes')(app, friends);
