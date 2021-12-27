const router = require('express').Router()
const authController = require('../controllers/auth.controller')
const userController = require('../controllers/user.controller')


router.post("/inscription", authController.signUp);
router.post("/connexion", authController.login)
router.get("/deconnexion", authController.logout)


router.get("/", userController.getAllUsers)
router.get("/:id", userController.getOneUser)
router.put("/:id", userController.modifyOneUser)
router.delete("/:id", userController.deleteOneUser)

module.exports = router;
