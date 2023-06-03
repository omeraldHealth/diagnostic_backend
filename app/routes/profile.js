const express = require('express');
const router = express.Router();
const profileController = require("../components/profileComponent")

// GET all Diagnostics
router.get('/getProfiles', profileController.getProfile);
router.get('/getProfile/:phoneNumber', profileController.getProfileByPhoneNumber);
router.post('/createProfile', profileController.createProfile);
router.put('/updateProfile', profileController.updateProfile);
router.delete('/deleteProfile/:id', profileController.deleteProfile);

module.exports = router;