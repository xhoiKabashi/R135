const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const bookingDetailSchema = new Schema({
  from: String,
  to: String,
  date: String,
  bus: String,
  fromTime: String,
  toTime: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "Users",
  },
  group: String,
  passengerCount: Number,
  passengers: Array,
  price: Number,
});

module.exports = mongoose.model("BookingDetail", bookingDetailSchema);
