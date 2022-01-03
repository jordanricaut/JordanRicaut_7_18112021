const PostModel = require('../models/post')
const UserModel = require('../models/user')
const LikeModel = require('../models/like')
const jwt = require('jsonwebtoken')
const fs = require('fs')


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
  const user = res.locals.user;
  const userId = user.dataValues.id
  const nouveauPost = new PostModel({
    titre: req.body.titre,
    message: req.body.message,
    imageUrl: ( req.file ? `${req.protocol}://${req.get('host')}/images/post/${req.file.filename}` : null ),
      userId: userId
    })
    try {
      const post = await nouveauPost.save()
      return res.status(200).json(post)
    } catch(err) {
      res.status(500).json({ err })
    }
  }

module.exports.modificationPost = async (req, res) => {
  const findOnePostpost = await PostModel.findOne({where: {id: req.params.id}})
  if (!findOnePostpost) {
    return res.status(500).json({message: "Post inconnu"})
  }
  if (req.file) {
    const filename = findOnePostpost.imageUrl.split('/images/')[1];
    fs.unlink(`images/${filename}`, () => {
      findOnePostpost.update({...req.body, imageUrl: `${req.protocol}://${req.get('host')}/images/post/${req.file.filename}` })})
        return res.status(200).json({message: "Post Modifié"})
  } else {
    findOnePostpost.update({...req.body})
    return res.status(200).json({message: "Post Modifié"})
    }
    return res.status(500).json({message: "Problème sur la modification"})
  }


module.exports.suppressionPost = async (req, res) => {
  PostModel.findOne({ id: req.params.id })
  .then(post => {
    if (!post) {
      return res.status(500).json({message: "Post inconnu"})    
    }
    const filename = post.imageUrl.split('/images/')[1];
    fs.unlink(`images/post/${filename}`, () => {
      PostModel.destroy({where: {id: req.params.id}})
      .then(() => res.status(200).json({ message: 'Post supprimé !'}))
      .catch(error => res.status(400).json({ error }));
      });
  })
  .catch(error => res.status(500).json({ error }));
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
