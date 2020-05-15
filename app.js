var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/about", function(req, res){
    res.render("about");
});

app.get("/advice", function(req, res){
    res.render("advice");
});

app.get("/books", function(req, res){
    res.render("books");
});

app.get("/media", function(req, res){
    res.render("media");
});

app.listen(port, function(){
    console.log("Jane is now live on the server");
});