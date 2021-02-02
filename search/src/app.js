const fetch = require("node-fetch");
const express = require("express");
const Gpu = require("./models/gpus_model");
const Cpu = require("./models/cpus_model");
const app = express();

app.get("/", (req, res) => {
  res.json({ msg: "search" });
});

app.get("/api/v1/search", async (req, res) => {
  const gpusPromise = Gpu.find({});
  const cpusPromise = Cpu.find({});
  const promises = [gpusPromise, cpusPromise];
  const [gpus, cpus] = await Promise.all(promises);

  res.json(gpus.concat(cpus));
});

module.exports = app;
