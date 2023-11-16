const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const bookingDetailSchema = new Schema({
  name: String,
  lastName: String,
  age: Number,
  email: String,
  from: String,
  to: String,
  date: String,
  fromTime: String,
  toTime: String,
  price: Number,
  userID: String,
});

module.exports = mongoose.model("BookingDetail", bookingDetailSchema);
