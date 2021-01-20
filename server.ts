/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use("/", express.static(__dirname + "/dist"));
// app.post('/api/login',(req,res) => {
// console.log(req.query,'req');
// // harcode name and password
// // verify if recieved params are equal
// // in case of true send ok , if false send false and error name

// })

app.get("/*", (req: any, res: any) => {
  res.sendFile(path.resolve(__dirname + "/dist/index.html"));
});

app.post("/api/login", (req: any, res: any) => {
  console.log(req, "req");
  const working = 'working';
  res.json(working);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
