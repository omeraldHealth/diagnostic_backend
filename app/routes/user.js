const express = require('express');
const router = express.Router();
const userController = require("../components/userController")

// GET all Diagnostics
router.get('/getUsers', userController.getUser);
router.get('/getUser/:phoneNumber', userController.getUserByPhoneNumber);
router.post('/createUser', userController.createUser);
router.put('/updateUser', userController.updateUser);
router.delete('/deleteUser/:id', userController.deleteUser);

module.exports = router;