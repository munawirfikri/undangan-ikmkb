const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const bodyParser = require('body-parser');
const Swal = require('sweetalert2');

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('dotenv').config();

const port = 8008;


app.get('/', (req, res) => {

  let name = "Tuan dan Puan"

  if(req.query.name){
    name = req.query.name;
  }

    res.render('index', {
        layout: false,
        name
    })
});

app.listen(port);
