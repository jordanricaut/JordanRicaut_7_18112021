// Importation du model pour les commentaires
const UserModel = require('../models/user')
const LikeModel = require('../models/like')
// Liste des paquets utilisés
const bcrypt = require('bcrypt');

// Permet l'affichage de tout les utilisateurs inscrits
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


// Permet l'affichage d'un utilisateur et de ses infos
module.exports.getOneUserInfos = async (req, res, next) => {
  try {
    const user = await UserModel.findOne({where: {id: req.params.id}})
    const likeUsers = await LikeModel.findAll({where: {userId: user.id}})

    const usersData = [user, likeUsers]


    return res.status(200).json(usersData)
  }
  catch(err) {
    res.status(500).json({ err })
  }
}

// Permet la modification des informations d'un utilisateur
module.exports.modifyOneUser = async (req,res, next) => {
  try {
  const findOneUser = await UserModel.findOne({where: {id: req.params.id}})
  if (!findOneUser) {
    res.status(400).json({message: "Utilisateur inconnu"})
  }
  const mdp = await bcrypt.hash(req.body.mdp, 10)

    findOneUser.update({mdp: mdp})
    res.status(200).json({message: 'Utilisateur modifié !'})
  } catch(err) {
    console.log(req.body);

  return res.status(500).json({ err } )
}
}

// Permet de supprimer un utilisateur
module.exports.deleteOneUser = async (req,res, next) => {
  try {
    const user = await UserModel.destroy({where: {id: req.params.id}})
    res.cookie('jwt', '', {maxAge: 1})
    return res.status(200).json({message: 'Utilisateur Supprimé'})
  }
  catch(err) {
    res.status(500).json(err)
  }
}
