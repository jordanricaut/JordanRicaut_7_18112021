const jwt = require('jsonwebtoken')
const UserModel = require('../models/user')



module.exports.verifUser = (req, res, next) => {
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
        console.log(userLocal)
        next()
      }
    })
  } else {
    res.locals.user = null;
    next()
  }
}

module.exports.requireAuth = (req, res, next) => {
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
