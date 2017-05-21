var express = require("express");
var app = express();
var path = require("path");
var port = process.env.PORT|3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
var index = require("./routers/index");
app.use("/", index);
app.use(express.static("public"));

app.listen(port, ()=>console.log("server listen on port "+ port));
