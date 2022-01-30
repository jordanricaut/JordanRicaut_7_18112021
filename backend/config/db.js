require('dotenv').config()

const { Sequelize } = require('sequelize');

module.exports = new Sequelize(process.env.MYSQL_BDD, process.env.MYSQL_UTIL, process.env.MYSQL_MDP, {
  host: process.env.MYSQL_URL,
  dialect: 'mysql',
  port: process.env.MYSQL_PORT,
});
