const express = require('express');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/user.routes')

const db = require('./config/db')

db.authenticate()
  .then(() => {
      console.log("Connexion avec la bdd :", process.env.MYSQL_BDD, "réussi")
  })
  .catch(error => {
    console.log("Probleme connexion bdd : ", error)
  })

const app = express();



app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
  res.json({ message: "API Groupomania" });
});

app.use('/api/user', userRoutes);


module.exports = app;
