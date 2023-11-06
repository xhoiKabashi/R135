// models/route.js
const mongoose = require("mongoose");

const busSchema = new mongoose.Schema({
  time: String,
  seats: Number,
});

const routeSchema = new mongoose.Schema({
  origin: String,
  destination: String,
  buses: [busSchema],
});

module.exports = mongoose.model("Route", routeSchema);
