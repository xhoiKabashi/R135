const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BusSeatsSchema = new Schema({
  bus: { type: Schema.Types.ObjectId, ref: "BusSchema", required: true },
  status: {
    type: String,
    required: true,
  },
});

// Virtual for bus seat's URL
BusSeatsSchema.virtual("url").get(function () {
  return `/api/seats/${this._id}`;
});

// Export model
module.exports = mongoose.model("BusSeat", BusSeatsSchema);
