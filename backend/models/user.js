const Sequelize = require('sequelize');
const db = require('../config/db')


const User = db.define("user", {
  id: {
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    required: true,
    lowercase: true,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Vous devez saisir un email',
      },
      notEmpty: {
        msg: 'Vous devez saisir un email',
      },
      isEmail: {
        msg: 'Vous devez saisir un email valide',
      },
      async isUnique(email) {
        const user = await User.findOne({ where: { email: email } })
        if (user) {
          throw new Error('Oups, cet email existe déjà');
        }
      }
    }
  },
  nom: {
    type: Sequelize.STRING,
    unique: true,
    required: true,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Vous devez saisir un nom',
      },
      notEmpty: {
        msg: 'Vous devez saisir un nom',
      },
    }
  },
  prenom: {
    type: Sequelize.STRING,
    unique: true,
    required: true,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Vous devez saisir un prenom',
      },
      notEmpty: {
        msg: 'Vous devez saisir un prenom',
      },
    }
  },
  mdp: {
    type: Sequelize.STRING,
    unique: true,
    required: true,
    allowNull: false,
  },
  likes: {
    type: [Sequelize.STRING]
  }
  }, {
  timestamps: false,
});


module.exports = User;
