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

// Add a method to reserve a seat
routeSchema.methods.reserveSeat = async function (departureTime) {
  const bus = this.buses.find((b) => b.time === departureTime);
  if (bus && bus.seats > 0) {
    bus.seats -= 1;
    await this.save(); // Save the updated document
    return true; // Seat reserved successfully
  } else {
    return false; // No available seats or bus not found
  }
};

module.exports = mongoose.model("Route", routeSchema);
