// Importation du model pour les commentaires
const UserModel = require('../models/user')
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

// Permet l'affichage d'un utilisateur
module.exports.getOneUser = async (req, res, next) => {
  try {
    const user = await UserModel.findOne({where: {id: req.params.id}})

    return res.status(200).json(user)
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
    findOneUser.update({email: req.body.email})
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
    return res.status(200).json({message: 'Utilisateur Supprimé'})
  }
  catch(err) {
    res.status(500).json(err)
  }
}
