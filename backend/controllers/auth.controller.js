const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


const UserModel = require('../models/user')
const maxAge = 3 * 24 * 60 * 60 * 1000
const createToken = (id) => {
  return jwt.sign({id}, process.env.TOKEN_SECRET, { expiresIn: maxAge })
}

module.exports.signUp = async (req, res) => {
  console.log(req.body)
  const {email, nom, prenom} = req.body
  const mdp = await bcrypt.hash(req.body.mdp, 10)

  try {
    const user = await UserModel.create({email, nom, prenom, mdp});
    res.status(201).json({user: user.id})
  }
  catch(error) {
    res.status(500).send({ error })
  }
}

module.exports.login = async (req, res) => {
  const { email, mdp } = req.body;
  const user = await UserModel.findOne({where: {email: req.body.email}})
  if (!user) {
    return res.status(400).json({erreur: "Mauvaise adresse email"})
  }
  const match = await bcrypt.compare(mdp, user.mdp);
    if(match) {
      const token = createToken(user.id)
      res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge})
      res.status(201).json({user: user.id, token: token})
    }
    res.cookie('jwt', '', {maxAge: 1})
    return res.status(400).json({erreur: "Mauvais mot de passe"})
};

module.exports.logout = async (req, res) => {
  res.cookie('jwt', '', {maxAge: 1})
  res.redirect("/");
}
