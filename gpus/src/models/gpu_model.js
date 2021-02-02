const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GpuSchema = new Schema({
  name: String,
  type: { type: String, default: "gpu" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Gpu", GpuSchema);
