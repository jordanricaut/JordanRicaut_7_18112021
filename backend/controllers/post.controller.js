const PostModel = require('../models/post')
const UserModel = require('../models/user')
const LikeModel = require('../models/like')
const jwt = require('jsonwebtoken')

module.exports.lireToutLesPosts = async (req, res) => {
  try {
    const posts = await PostModel.findAll()

    return res.status(200).json(posts)
  }
  catch(err) {
    res.status(500).json({ error: err})
  }
}

module.exports.lireUnPost = async (req,res) =>{
  try {
    const post = await PostModel.findOne({where: {id: req.params.id}})

    return res.status(200).json(post)
  }
  catch(err) {
    res.status(500).json({ err })
  }
}

module.exports.creationPost = async (req, res) => {
  const nouveauPost = new PostModel({
    titre: req.body.titre,
    message: req.body.message,
    //imageUrl: req.body.imageUrl,
    userId: req.body.userId
  })
  try {
    const post = await nouveauPost.save()
    return res.status(200).json(post)
  } catch(err) {
    res.status(500).json({ err })
  }
}

module.exports.modificationPost = async (req, res) => {
  try {
    const {titre, message, imageUrl} = req.body
    const findOnePost = await PostModel.findOne({where: {id: req.params.id}})
    if (!findOnePost) {
      res.status(400).json({message: "Post inconnu"})
    }
    if (titre) { findOnePost.titre = titre }
    if (message) { findOnePost.message = message }
    if (imageUrl) { findOnePost.imageUrl = imageUrl}
    const updatePost = await findOnePost.save()
    if (!updatePost) {
      res.status(500).json({ error: 'Echec de la modification'})
    }
    res.status(200).json({message: 'Post modifié !'})
  }
  catch(err) {
    res.status(500).json({ error: 'Erreur'})
  }
}


module.exports.suppressionPost = async (req, res) => {
  try {
    const post = await PostModel.destroy({where: {id: req.params.id}})
    return res.status(200).json({message: 'Post Supprimé'})
  }
  catch(err) {
    res.status(500).json(err)
  }
}

module.exports.likePost = async (req, res) => {
  const postId = req.params.id;
  const user = res.locals.user;
  const userId = user.dataValues.id

  const likeExistant = await LikeModel.findOne({
    where: { postId: postId, userId: userId },
  });

  if (!likeExistant) {
    const nouveauLike = new LikeModel({
      postId: postId,
      userId: userId
    })
    try {
      const post = await nouveauLike.save()
      return res.status(200).send("Post Liké")
    } catch(err) {
      res.status(500).json({ err })
    }
  } else {
    try {
      await LikeModel.destroy({
        where: { postId: postId, userId: userId },
      });
      res.json({ like: "Supprimé" });
    } catch(err) {
      res.status(500).json({ err })
    }
  }
}
