const router = require('express').Router()
const authController = require('../controllers/auth.controller')

router.post("/inscription", authController.signUp);

module.exports = router;
