// Importation des models pour les posts, utilisateurs et likes
const PostModel = require("../models/post");
const UserModel = require("../models/user");
const LikeModel = require("../models/like");
const CommentaireModel = require("../models/commentaire");
// Liste des paquets utilisés
const jwt = require("jsonwebtoken");
const fs = require("fs");

// Permet d'afficher tout les posts
module.exports.lireToutLesPosts = async (req, res) => {
  try {
    const posts = await PostModel.findAll({ order: [["createdAt", "DESC"]] });

    return res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// Permet d'afficher un post spécifique
module.exports.lireUnPost = async (req, res) => {
  try {
    const post = await PostModel.findOne({ where: { id: req.params.id } });
    const commentaire = await CommentaireModel.findAll({
      where: { postId: post.id },
    });
    const like = await LikeModel.findAll({ where: { postId: post.id } });

    const postData = [post, commentaire, like];

    return res.status(200).json(postData);
  } catch (err) {
    res.status(500).json({ err });
  }
};

// Permet de créer un post
module.exports.creationPost = async (req, res) => {
  const nouveauPost = new PostModel({
    message: req.body.message,
    imageUrl: req.file
      ? `${req.protocol}://${req.get("host")}/images/post/${req.file.filename}`
      : null,
    userId: req.body.userId,
  });
  try {
    const post = await nouveauPost.save();
    return res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ err });
  }
};

// Permet la modification d'un post
module.exports.modificationPost = async (req, res) => {
  const findOnePostpost = await PostModel.findOne({
    where: { id: req.params.id },
  });
  if (!findOnePostpost) {
    return res.status(500).json({ message: "Post inconnu" });
  }
  findOnePostpost.update({ message: req.body.message });
  return res.status(200).json({ message: "Post Modifié" });
};

// Permet la suppresion d'un
module.exports.suppressionPost = async (req, res) => {
  PostModel.findOne({ where: { id: req.params.id } })
    .then((post) => {
      if (!post) {
        return res.status(500).json({ message: "Post inconnu" });
      }
      if (post.imageUrl === null) {
        PostModel.destroy({ where: { id: req.params.id } })
          .then(() => res.status(200).json(post))
          .catch((error) => res.status(400).json({ error }));
      } else {
        const filename = post.imageUrl.split("/images/post")[1];
        fs.unlink(`images/post/${filename}`, () => {
          PostModel.destroy({ where: { id: req.params.id } })
            .then(() => res.status(200).json(post))
            .catch((error) => res.status(400).json({ error }));
        });
      }
    })
    .catch((error) => res.status(500).json({ error }));
};

// Permet de liker ou supprimer son like d'un post
module.exports.likePost = async (req, res) => {
  const postId = req.params.id;
  const user = res.locals.user;
  const userId = user.dataValues.id;

  const likeExistant = await LikeModel.findOne({
    where: { postId: postId, userId: userId },
  });

  if (!likeExistant) {
    const nouveauLike = new LikeModel({
      postId: postId,
      userId: userId,
    });
    try {
      const post = await nouveauLike.save();
      return res.status(200).send("Post Liké");
    } catch (err) {
      res.status(500).json({ err });
    }
  } else {
    try {
      await LikeModel.destroy({
        where: { postId: postId, userId: userId },
      });
      res.send("Post supprimé");
    } catch (err) {
      res.status(500).json({ err });
    }
  }
};
