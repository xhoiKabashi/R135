const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Airplane model
const AirplaneSchema = new Schema({
  name: String,
  totalSeats: [Number],
});

module.exports = mongoose.model("Airplane", AirplaneSchema);
