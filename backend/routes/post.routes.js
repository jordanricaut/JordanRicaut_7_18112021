const router = require('express').Router()
const postController = require('../controllers/post.controller')
const commentaireController = require('../controllers/commentaire.controller')

const multer = require('../middleware/multer-config')

// Posts
router.get('/', postController.lireToutLesPosts)
router.get('/:id', postController.lireUnPost)
router.post('/', multer.storagePost, postController.creationPost)
router.put('/:id', multer.storagePost, postController.modificationPost)
router.delete('/:id', postController.suppressionPost)

//Likes
router.post('/:id/like', postController.likePost)

// Commentaires
router.get('/:id/commentaire', commentaireController.toutLesCommentairePost)
router.get('/:id/commentaire/:id', commentaireController.lireUnCommentaire)
router.post('/:id/commentaire', commentaireController.creationCommentaire)
router.put('/:id/commentaire/:id', commentaireController.modificationCommentaire)
router.delete('/:id/commentaire/:id', commentaireController.suppressionCommentaire)


module.exports = router;
