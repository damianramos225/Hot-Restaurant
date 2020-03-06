var express = require("express");
var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json);

//require("./routes/apiRoutes")(app);
//require("./routes/htmlRoutes")(app);

//listener
app.listen(PORT, function () {
    console.log("Hotness App is listening on PORT " + PORT);
});

app.post("/tableData", function (req, res) {
    var tableArray = req.body;

    console.log(tableArray);

    characters.push(tableArray);

    res.json(tableArray);
});