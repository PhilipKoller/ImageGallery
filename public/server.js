var express=require("express"),app=express();app.get("/",(function(e,s){s.send("test")})),app.listen(3e3,(function(){console.log("server running")}));