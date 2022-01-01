const Sequelize = require('sequelize');
const db = require('../config/db')


const Post = db.define("posts", {
  id: {
    type: Sequelize.STRING,
    required: true,
    autoIncrement: true,
    primaryKey: true
  },
  titre: {
    type: Sequelize.STRING,
    required: true
  },
  message: {
    type: Sequelize.STRING,
    required: true
  },
  imageUrl: {
    type: Sequelize.STRING,
    required: true
  },
  userId: {
    type: Sequelize.STRING,
    required: true
  }
  });


module.exports = Post;
