//Variables
const express = require('express')
const SecurityController = require('../../controllers/security.controller');
const router = express.Router()
//Actions
router.get('/valid/:token', SecurityController.validToken)
router.post('/login', SecurityController.login)
//Export
module.exports = router;