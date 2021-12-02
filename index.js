//const { response } = require('express');
const express = require('express'); //https://expressjs.com/en/4x/api.html#express
const app = express();
const m = require('./controllers/morgan_config')
const router = express.Router();
app.use(m);
app.set('view engine','pug');
const routes = require('./routes/routes');
routes(router);
const port = 8080;
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static('HTML'));

app.use('/',router);
app.listen(port,()=>console.log("Listening on " +port));
module.exports = app;