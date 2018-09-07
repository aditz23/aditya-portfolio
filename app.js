var express = require("express");
var app = express();


app.set("view engine","ejs");





app.get("/", function(req, res){
  res.render("index");
});
app.get("/calculator", function(req, res){
  res.render("calculator");
});
app.get("/clock", function(req, res){
  res.render("clock");
});
app.get("/resume", function(req, res){
  res.render("resume");
});
app.get("/quote", function(req, res){
  res.render("quote");
});
app.get("/simon", function(req, res){
  res.render("simon");
});
app.get("/tictactoe", function(req, res){
  res.render("tictactoe");
});
app.get("/tribute", function(req, res){
  res.render("tribute");
});
app.get("/twitchtv", function(req, res){
  res.render("twitchtv");
});
app.get("/weather", function(req, res){
  res.render("weather");
});
app.get("/wikipedia", function(req, res){
  res.render("wikipedia");
});




app.listen(process.env.PORT || 3000);
