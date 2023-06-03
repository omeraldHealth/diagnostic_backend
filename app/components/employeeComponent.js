const Employee = require('../models/employee');

// Get all Employees
const getEmployee = async (req, res) => {
  try {
    const employee = await Employee.find();
    res.json(employee);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a Employee by phone number
const getEmployeeByPhoneNumber = async (req, res) => {
    const { phoneNumber } = req.params;

    try {
      const employee = await Employee.findOne({"managerContact":phoneNumber});
      if (!employee) {
        return res.status(404).json({ error: 'Employee not found' });
      }
      res.json(employee);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
};

// Create a new Employee
const createEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' + error });
  }
};

// Update a Employee by ID
const updateEmployee = async (req, res) => {
  const {id} = req.body;
  try {
    const employee = await Employee.findByIdAndUpdate(id, req.body, { new: true });
    if (!employee) {
      return res.status(404).json({ error: 'Employee not found' });
    }
    res.json(employee);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a Employee by ID
const deleteEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    const employee = await Employee.findByIdAndDelete(id);
    if (!employee) {
      return res.status(404).json({ error: 'Employee not found' });
    }
    res.json({ message: 'Employee deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getEmployee,
  getEmployeeByPhoneNumber,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};