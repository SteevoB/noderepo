var express = require("express");
var app = express();
var bodyParser = require("body-parser")

//läsa data från POST body

var MyParser = bodyParser.urlencoded();
app.use(express.static(__dirname));

app.get("/", function (req,res){
    //res.send("Hello from Express");
    res.sendFile(__dirname + "/" +"index.html");
})

app.get("/products", function(req,res){
    console.log("Got a request for products");
    res.send("Listing all products");
})

app.post("/namehandler", MyParser, function(req,res){
    console.log(req.body.firstname);
    res.end("Hello "+req.body.firstname);
})

var server = app.listen(8088, function(){
    var host = server.address().address
    var port = server.address().port

    console.log("Express app listening at %s %s", host, port)
})