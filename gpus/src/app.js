const express = require("express");
const Gpu = require("./models/gpu_model");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ msg: "gpus" });
});

app.get("/api/v1/gpus", async (req, res) => {
  const gpu = await Gpu.find({});
  res.json(gpu);
});

app.post("/api/v1/gpus", async (req, res) => {
  const gpu = new Gpu({ name: req.body.name });
  const savedGpu = await gpu.save();
  res.json(savedGpu);
});

module.exports = app;
