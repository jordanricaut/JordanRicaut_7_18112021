const router = require('express').Router()
const postController = require('../controllers/post.controller')

router.get('/', postController.lireToutLesPosts)
router.get('/:id', postController.lireUnPost)
router.post('/', postController.creationPost)
router.put('/:id', postController.modificationPost)
router.delete('/:id', postController.suppressionPost)

//likes
router.post('/:id/like', postController.likePost)
module.exports = router;
