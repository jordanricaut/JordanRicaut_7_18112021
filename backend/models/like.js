const Sequelize = require('sequelize');
const db = require('../config/db')


const Like = db.define("likes", {
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
  userId: {
    type: Sequelize.STRING,
    required: true
  },
}, {
  timestamps: false
});

  module.exports = Like;
