const mongoose = require("mongoose")

const EmployeeSchema = new mongoose.Schema({
  managerName: {type:String,required:true},
  managerRole: {type:String,required:true},
  managerContact:{type:String,required:true,unique:true},
  mainBranchId: {type:String,required:true},
  branchId:  {type:String},
})

var DiagnosticEmployeesTable = mongoose.model("diagnostic-employee", EmployeeSchema);

module.exports = DiagnosticEmployeesTable;
