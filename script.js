const express = require('express');
const app = express();

app.get("/" , function(req, res){
          res.send("Champion ")
})

app.get("/profile" , function(req, res){
          res.send("what you say?")
})

app.listen(3000);