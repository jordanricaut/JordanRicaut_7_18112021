require('dotenv').config()

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.MYSQL_BDD, process.env.MYSQL_UTIL, process.env.MYSQL_MDP, {
  host: process.env.MYSQL_URL,
  dialect: 'mysql',
  port: process.env.MYSQL_PORT
});
sequelize.authenticate()
  .then(() => {
      console.log("Connexion avec la bdd :", process.env.MYSQL_BDD, "réussi")
  })
  .catch(error => {
    console.log("Probleme connexion bdd : ", error)
  })
