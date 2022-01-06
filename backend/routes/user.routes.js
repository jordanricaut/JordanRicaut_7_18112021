const router = require('express').Router()
const authController = require('../controllers/auth.controller')
const userController = require('../controllers/user.controller')

// Gestion des routes des controllers d'authentification
router.post("/inscription", authController.inscription);
router.post("/connexion", authController.connexion)
router.get("/deconnexion", authController.deconnexion)

// Gestion des routes des controllers des utilisateurs
router.get("/", userController.getAllUsers)
router.get("/:id", userController.getOneUser)
router.put("/:id", userController.modifyOneUser)
router.delete("/:id", userController.deleteOneUser)

module.exports = router;
