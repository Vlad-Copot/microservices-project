const express = require("express");
const Cpu = require("./models/cpu_model");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

// root endpoint -> return the name of the service
app.get("/", (req, res) => {
  res.json({ msg: "cpus" });
});

// get endpoint, returns all cpus in database
app.get("/api/v1/cpus", async (req, res) => {
  const cpu = await Cpu.find({});
  res.json(cpu);
});

// post endpoint, to create a new Cpu
app.post("/api/v1/cpus", async (req, res) => {
  //create an instance
  const cpu = new Cpu({ name: req.body.name });
  //save it
  const savedCpu = await cpu.save();
  res.json(savedCpu);
});

module.exports = app;
