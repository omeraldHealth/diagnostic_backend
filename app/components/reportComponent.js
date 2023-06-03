const Report = require('../models/report');

// Get all Reports
const getReport = async (req, res) => {
  try {
    const report = await Report.find();
    res.json(report);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a Report by phone number
const getReportByPhoneNumber = async (req, res) => {
    const { phoneNumber } = req.params;

    try {
      const report = await Report.findOne({"userId":phoneNumber});
      if (!report) {
        return res.status(404).json({ error: 'Report not found' });
      }
      res.json(report);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
};

// Create a new Report
const createReport = async (req, res) => {
  try {
    const report = await Report.create(req.body);
    res.status(201).json(report);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' + error });
  }
};

module.exports = {
  getReport,
  getReportByPhoneNumber,
  createReport,

};