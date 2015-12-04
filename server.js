var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

var contactRouter = require("./routes/contact_list");
var carRouter = require("./routes/car_list");
app.use("/", contactRouter);
app.use("/carlist", carRouter);



app.listen(8000);
console.log("server running on 8000");