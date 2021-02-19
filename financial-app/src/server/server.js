const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const bodyParser = require("body-parser");
const cors = require('cors');
const controller = require("./controller");

app.use(cors());
app.use(bodyParser.json());

app.use("/", express.static(__dirname + "./../../dist"));

app.get("/", (req, res) => {
    res.redirect("/login");
});
app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname + "./../../dist/index.html"));
});
app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname + "./../../dist/index.html"));
});


app.post("/api/login", controller.login);
app.post("/api/calc", controller.calc);
app.post("/api/step1", controller.step1);
app.post("/api/step2", controller.step2);
app.post("/api/step3", controller.step3);
app.post("/api/step4", controller.step4);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});