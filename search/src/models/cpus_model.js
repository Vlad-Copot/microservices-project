const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CpuSchema = new Schema({
  name: String,
  type: { type: String, default: "cpu" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Cpu", CpuSchema);
