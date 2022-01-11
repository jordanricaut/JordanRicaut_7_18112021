const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const cors = require('cors')

const { verifUser, requireAuth } = require('./middleware/auth.middleware')

require('dotenv').config()


const userRoutes = require('./routes/user.routes')
const postRoutes = require('./routes/post.routes')

const db = require('./config/db')

db.authenticate()
  .then(() => {
      console.log("Connexion avec la bdd :", process.env.MYSQL_BDD, "réussi")
  })
  .catch(error => {
    console.log("Probleme connexion bdd : ", error)
  })

const app = express();

app.use(cors({origin: "http://localhost:3000", credentials: true}));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())


app.get('*', requireAuth);
app.post('*', requireAuth);
app.put('*', requireAuth);
app.delete('*', requireAuth);

app.get('/jwtid', verifUser, (req, res, next) => {
  res.status(200).json(res.locals.user.id)
  next()
})

app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes)


module.exports = app;
