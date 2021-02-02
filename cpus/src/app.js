const express = require("express");
const Cpu = require("./models/cpu_model");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ msg: "cpus" });
});

//return all results from database
app.get("/api/v1/cpus", async (req, res) => {
  const cpu = await Cpu.find({});
  res.json(cpu);
});

app.post("/api/v1/cpus", async (req, res) => {
  //create an instance
  const cpu = new Cpu({ name: req.body.name });
  //save it
  const savedCpu = await cpu.save();
  //return
  res.json(savedCpu);
});

module.exports = app;
