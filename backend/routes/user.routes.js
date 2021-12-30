const router = require('express').Router()
const authController = require('../controllers/auth.controller')
const userController = require('../controllers/user.controller')


router.post("/inscription", authController.inscription);
router.post("/connexion", authController.connexion)
router.get("/deconnexion", authController.deconnexion)


router.get("/", userController.getAllUsers)
router.get("/:id", userController.getOneUser)
router.put("/:id", userController.modifyOneUser)
router.delete("/:id", userController.deleteOneUser)

module.exports = router;
