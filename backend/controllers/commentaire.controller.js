const CommentaireModel = require('../models/commentaire')


module.exports.lireUnCommentaire = async (req,res) =>{
  try {
    const post = await PostModel.findOne({where: {id: req.params.id}})

    return res.status(200).json(post)
  }
  catch(err) {
    res.status(500).json({ err })
  }
}

module.exports.creationCommentaire = async (req, res) => {
  const user = res.locals.user;
  const userId = user.dataValues.id
  const nouveauCommentaire = new CommentaireModel({
    userId: userId,
    postId: req.params.id,
    message: req.body.message,
  })
  try {
    const commentaire = await nouveauCommentaire.save()
    return res.status(200).json(commentaire)
  } catch(err) {
    res.status(500).json({ err })
  }
}

module.exports.modificationCommentaire = async (req, res) => {
  try {
    const message = req.body.message
    const findOneCommentaire = await CommentaireModel.findOne({where: {id: req.params.id}})
    if (!findOneCommentaire) {
      res.status(400).json({message: "Commentaire inconnu"})
    }
    if (message) { findOneCommentaire.message = message }
    const updateCommentaire = await findOneCommentaire.save()
    if (!updateCommentaire) {
      res.status(500).json({ error: 'Echec de la modification'})
    }
    res.status(200).json({message: 'Post modifié !'})
  }
  catch(err) {
    res.status(500).json({ err })
  }
}


module.exports.suppressionCommentaire = async (req, res) => {
  try {
    const post = await CommentaireModel.destroy({where: {id: req.params.id}})
    return res.status(200).json({message: 'Commentaire Supprimé'})
  }
  catch(err) {
    res.status(500).json(err)
  }
}
