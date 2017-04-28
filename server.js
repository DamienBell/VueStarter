"use strict";

var abspath     = __dirname;
var HOME        = abspath;
var GLOBALDATA  = HOME+"/data/"
var TOOLPATH    = HOME+"/tools.js"
var LOCALDATA   = __dirname+"/input/"
var OUTPUTPATH  = __dirname+"/output/"

var express     = require("express");
var app         = express();
var path        = require('path');
var BodyParser  = require("body-parser");

var Promise     = require('promise');
var _           = require('underscore');
var tools       = require(TOOLPATH);

app.use(express.static(path.join(__dirname, 'public')));

app.use(BodyParser.urlencoded({ extended: true}));
app.use(BodyParser.json());

//This is intended for development only.
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
  next();
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/hello", function (req, res) {
  res.json({hello: "seems to be working"});
});

//prevent reading unauthorized files
app.get("/*", function (req, res, next) {
  res.end("nope");
});

var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
