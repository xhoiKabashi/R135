const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FlightSchema = new Schema({
  route: {
    type: Schema.Types.ObjectId,
    ref: "Route",
  },
  airplane: {
    type: Schema.Types.ObjectId,
    ref: "Airplane",
  },
  departureTime: Date,
  arrivalTime: Date,
  seats: [
    {
      number: Number,
      booked: {
        type: Boolean,
        default: false,
      },
    },
  ],
  price: Number,
});
module.exports = mongoose.model("Flight", FlightSchema);
