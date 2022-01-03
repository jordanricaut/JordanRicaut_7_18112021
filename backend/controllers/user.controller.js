const UserModel = require('../models/user')
const bcrypt = require('bcrypt');


module.exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await UserModel.findAll()

    return res.status(200).json(users)
  }
  catch {
    res.status(500).json({ error: 'Erreur'})
  }
}

module.exports.getOneUser = async (req, res, next) => {
  try {
    const user = await UserModel.findOne({where: {id: req.params.id}})

    return res.status(200).json(user)
  }
  catch(err) {
    res.status(500).json({ err })
  }
}

module.exports.modifyOneUser = async (req,res, next) => {
  try {
  const mdp = await bcrypt.hash(req.body.mdp, 10)
  const findOneUser = await UserModel.findOne({where: {id: req.params.id}})
  if (!findOneUser) {
    res.status(400).json({message: "Utilisateur inconnu"})
  }
    findOneUser.update({...req.body, mdp: mdp} )
    res.status(200).json({message: 'Utilisateur modifié !'})
  } catch(err) {
  return res.status(500).json({ err } )
}
}

module.exports.deleteOneUser = async (req,res, next) => {
  try {
    const user = await UserModel.destroy({where: {id: req.params.id}})
    return res.status(200).json({message: 'Utilisateur Supprimé'})
  }
  catch(err) {
    res.status(500).json(err)
  }
}
