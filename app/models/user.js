const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
  userName: { type: String },
  phoneNumber: { type: String, required: true, unique: true },
  diagnosticCenters: [{
    diagnostic: { type: mongoose.Schema.Types.ObjectId, ref: 'profiles', required:true },
    branches: [{
      branch: { type: mongoose.Schema.Types.ObjectId},
      role: { type: String, default: 'user' }
    }]
  }]
});

var DiagnosticEmployeesTable = mongoose.model("user", UserSchema);

module.exports = DiagnosticEmployeesTable;
