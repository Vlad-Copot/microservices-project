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

app.get("/api/v1/search/cpu", async (req, res) => {
  try {
    const cpuPromise = fetch("http://cpus:3000/api/v1/cpus");
    const promises = [cpuPromise];
    const [cpuResponse] = await Promise.all(promises);
    const cpuJson = await cpuResponse.json();

    res.json({ cpuJson });
  } catch (e) {
    res.status(500).json(e);
  }
});

app.get("/api/v1/search/gpu", async (req, res) => {
  try {
    const gpuPromise = fetch("http://gpus:3000/api/v1/gpus");
    const promises = [gpuPromise];
    const [gpuResponse] = await Promise.all(promises);
    const gpuJson = await gpuResponse.json();

    res.json({ gpuJson });
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = app;
