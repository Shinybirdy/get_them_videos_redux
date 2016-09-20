var express = require("express");
var app = express();
var bodyParser = require ("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended:false });
var path = require("path");
var router = express.Router();

var videoRoutes = require('./app.routes.js');

app.use(bodyParser.json());
app.use(express.static('public'));

app.get("/", function(req, res){
  console.log("at base URL");
  res.sendFile(path.resolve('./public/views/index.html'));
});

var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log("Mama is listening on your local 3000, darlin'...");
});
