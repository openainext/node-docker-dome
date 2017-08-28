var express = require("express");
var app     = express();
app.get('/',function(req,res){
   res.send('hell world')
});
app.listen(80);
console.log("Express server listening on port %d in %s mode", 80, app.settings.env);
