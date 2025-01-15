const express = require('express');

app = express();

app.get("/", function(req, res){
    res.send("Hello World");
});

app.post("/", function(req,res){
    res.send("I am post body");
})


app.listen(8010, function(){
    console.log("Server Run Success.")
})