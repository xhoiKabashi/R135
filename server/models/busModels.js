const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const busModels = new Schema({
  from: String,
  to: String,
  date: Number,
  bus: String,
  fromTime: String,
  toTime: String,
  totalSeats: Number,
  passengers: Array,
  price: Number,
});

module.exports = mongoose.model("busModels", busModels);
