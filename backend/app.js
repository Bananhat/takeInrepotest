const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const userRoutes = require('./routes/user');

const app = express();



mongoose.connect('mongodb+srv://samuel:dora@cluster0-bd8h1.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useCreateIndex : true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader("Access-Control-Allow-Methods","PUT, POST, GET, DELETE, PATCH, OPTIONS");
  next();
});
app.use(bodyParser.json());





//AUTH START
app.use('/api/auth', userRoutes);
//AUTH END





module.exports = app;