//Variables
const express = require('express')
const UserController = require('../../controllers/users.controller');
const router = express.Router()
//Actions
router.get('/:username/:password', UserController.FindUser)
//Export
module.exports = router;