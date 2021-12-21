const bcrypt = require('bcrypt');
var CryptoJS = require("crypto-js");


const UserModel = require('../models/user')

module.exports.signUp = async (req, res) => {
  const {email, nom, prenom, mdp_brut} = req.body

  const mdp = await bcrypt.hash(req.body.mdp, 10)

  try {
    const user = await UserModel.create({email, nom, prenom, mdp});
    res.status(201).json({user: user.id})
  }
  catch(error) {
    res.status(500).send({ error })
  }
}
