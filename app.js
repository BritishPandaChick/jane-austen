var express = require("express"),
    app = express(),
    port = 3000;

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.render("landing");
});

app.listen(port, function(){
    console.log("Jane is now live on the server");
});