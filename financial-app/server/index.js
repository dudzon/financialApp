const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const controller = require("./controller");
const bodyParser = require("body-parser");
const cors = require('cors');


app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
});
app.use(bodyParser.json());


app.use("/", express.static(__dirname + "./../dist"));

// app.get("/", (req, res) => {
//     res.redirect("login");
// });
app.get("login", (req, res) => {
    res.sendFile(path.resolve(__dirname + "./../dist/index.html"));
});
app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname + "./../dist/index.html"));
});


app.post("/api/login", controller.login);
app.post("/api/calc", cors(), controller.calc);
app.post("/api/step1", cors(), controller.step1);
app.post("/api/step2", cors(), controller.step2);
app.post("/api/step3", cors(), controller.step3);
app.post("/api/step4", cors(), controller.step4);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});