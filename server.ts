/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const bodyParser = require("body-parser");
const controller = require("./controller");

app.use(bodyParser.json());

app.use("/", express.static(__dirname + "/dist"));

app.get("/*", (req: any, res: any) => {
  res.sendFile(path.resolve(__dirname + "/dist/index.html"));
});

app.post("/api/login", controller.login);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
