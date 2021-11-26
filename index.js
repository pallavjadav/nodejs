//const { response } = require('express');
const express = require('express'); //https://expressjs.com/en/4x/api.html#express
const routes = require('./routes/routes');
const app = express();
const router = express.Router();
routes(router);
const port = 8080;
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/',router);
app.listen(port,()=>console.log("Listening on " +port));
