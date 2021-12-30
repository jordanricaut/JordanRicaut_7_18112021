const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')

const {verifUser, requireAuth} = require('./middleware/auth.middleware')

require('dotenv').config()


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
app.use(cookieParser())


app.get('*', verifUser);
app.get('/jwtid', requireAuth, (req, res, next) => {
  res.status(200).json({id: res.locals.user.id})
  next()
})

app.use('/api/user', userRoutes);


module.exports = app;
