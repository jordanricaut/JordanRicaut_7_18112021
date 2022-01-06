// Liste des paquets utilisés
const jwt = require('jsonwebtoken')
// Importation du model pour les commentaires
const UserModel = require('../models/user')


// Permet la vérification si l'utilisateur à le bon jeton jwt
module.exports.requireAuth = (req, res, next) => {
  const token = req.cookies.jwt
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, tokenDecode) => {
      if (err) {
        res.locals.user = null;
        res.cookie('jwt', '', {maxAge: 1})
        next()
      } else {
        let user = await UserModel.findByPk(tokenDecode.id)
        res.locals.user = user;
        let userLocal = user.dataValues
        next()
      }
    })
  } else {
    res.locals.user = null;
    next()
  }
}

// Permet de vérifier l'id de l'utilisateur actuellement connecté
module.exports.verifUser = (req, res, next) => {
  const token = req.cookies.jwt
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, tokenDecode) => {
      if (err) {
        console.log(err)
      } else {
        console.log(tokenDecode.id)
        next()
      }
    })
  } else {
    res.status(500).send('Pas de token')
    console.log('Pas de token')
  }
}
