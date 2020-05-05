const path = require('path');
const { Pool, Client } = require('pg');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

const helloRoutes = require('./routes/hello');
const peopleRoutes = require('./routes/people');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req,res,next){setTimeout(next,500)});

app.use('/hello', helloRoutes);
app.use(peopleRoutes);

app.listen(3000);
