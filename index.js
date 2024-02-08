const express = require('express')
const bodyParser = require('body-parser')
let cors = require('cors');
require('dotenv').config();
const app = express();
const port = 3000;
const routes = require('./routes/routes');

app.use(bodyParser.json())

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
routes(app);

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })