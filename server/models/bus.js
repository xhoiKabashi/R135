const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BusSchema = new Schema({
  timeOfDeparture: { type: Number },
  timeOfArrival: { type: Number },
  seats: [String], // Changed "string" to "String" for data type
});

BusSchema.virtual("url").get(function () {
  return `/api/bus/${this._id}`;
});

// Export model
module.exports = mongoose.model("Bus", BusSchema);
