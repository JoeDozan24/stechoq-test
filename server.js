const express = require("express");
const app = express();
var methodOverride = require("method-override");
const path = require("path");
const conn = require("./configs/db.js");

//Pug template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//Connect Route to Database
app.use(function(req, res, next) {
    req.conn = conn;
    next();
});

//Parsing body request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

//Include Router
const mhsRouter = require("./routes/mahasiswaRouter");
const mataKuliahRouter = require("./routes/mataKuliahRouter");
const programStudiRouter = require("./routes/programStudiRouter");
const rootRouter = require("./routes/rootRouter");

//Routing
app.use("/mahasiswa", mhsRouter);
app.use("/mataKuliah", mataKuliahRouter);
app.use("/programStudi", programStudiRouter);
app.use("/", rootRouter);

//Start Server
app.listen(3000, function() {
    console.log("Server listening on port 3000.");
});