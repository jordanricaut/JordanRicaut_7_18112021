const Sequelize = require('sequelize');
const db = require('../config/db')


const Commentaire = db.define("commentaires", {
  id: {
    type: Sequelize.STRING,
    required: true,
    autoIncrement: true,
    primaryKey: true
  },
  postId: {
    type: Sequelize.STRING,
    required: true
  },
  userNom: {
    type: Sequelize.STRING,
    required: true
  },
  userPrenom: {
    type: Sequelize.STRING,
    required: true
  },
  message: {
    type: Sequelize.STRING,
    required: true
  },
  userId: {
    type: Sequelize.STRING,
    required: true
  }
  });


module.exports = Commentaire;
