const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')

const {verifUser, requireAuth} = require('./middleware/auth.middleware')

require('dotenv').config()


const userRoutes = require('./routes/user.routes')
const postRoutes = require('./routes/post.routes')

const db = require('./config/db')


let date1 = new Date();
let dateLocale = date1.toLocaleString('fr-FR',{
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
});

db.authenticate()
  .then(() => {
      console.log("Connexion avec la bdd :", process.env.MYSQL_BDD, "réussi")
      console.log(dateLocale)
      console.log(new Date().toISOString())
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
app.post('*', verifUser);
app.put('*', verifUser);
app.delete('*', verifUser);

app.get('/jwtid', requireAuth, (req, res, next) => {
  res.status(200).json({id: res.locals.user.id})
  next()
})

app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes)


module.exports = app;
