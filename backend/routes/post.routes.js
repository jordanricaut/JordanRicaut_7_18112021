const router = require('express').Router()
const postController = require('../controllers/post.controller')
const commentaireController = require('../controllers/commentaire.controller')

// Posts
router.get('/', postController.lireToutLesPosts)
router.get('/:id', postController.lireUnPost)
router.post('/', postController.creationPost)
router.put('/:id', postController.modificationPost)
router.delete('/:id', postController.suppressionPost)

//Likes
router.post('/:id/like', postController.likePost)

// Commentaires
router.post('/:id/commentaire', commentaireController.creationCommentaire)
router.put('/:id/commentaire/:id', commentaireController.modificationCommentaire)
router.delete('/:id/commentaire/:id', commentaireController.suppressionCommentaire)


module.exports = router;
