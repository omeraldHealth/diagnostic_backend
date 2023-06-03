const express = require('express');
const router = express.Router();
const reportController = require("../components/reportComponent")

// GET all Diagnostics
router.get('/getReports', reportController.getReport);
router.get('/getReport/:phoneNumber', reportController.getReportByPhoneNumber);
router.post('/createReport', reportController.createReport);

module.exports = router;