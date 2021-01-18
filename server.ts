const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/dist'));

app.get('/*', (req:any, res:any) => {
  res.sendFile(path.resolve(__dirname + '/dist/index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})