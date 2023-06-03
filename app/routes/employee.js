const express = require('express');
const router = express.Router();
const employeeController = require("../components/employeeComponent")

// GET all Diagnostics
router.get('/getEmployees', employeeController.getEmployee);
router.get('/getEmployee/:phoneNumber', employeeController.getEmployeeByPhoneNumber);
router.post('/createEmployee', employeeController.createEmployee);
router.put('/updateEmployee', employeeController.updateEmployee);
router.delete('/deleteEmployee/:id', employeeController.deleteEmployee);

module.exports = router;