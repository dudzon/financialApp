const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const bodyParser = require("body-parser");
const cors = require('cors');


app.use(cors());
app.use(bodyParser.json());

// app.use('/api,routes');
app.use("/", express.static(__dirname + "./../dist"));


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});