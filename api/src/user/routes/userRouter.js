const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/allUsers', userController.getAllUsersController);

module.exports = router;