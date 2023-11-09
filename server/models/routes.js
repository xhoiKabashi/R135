const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RouteSchema = new Schema({
  origin: { type: String, required: true },
  arrival: { type: String, required: true },
  bus: { type: Schema.Types.ObjectId, ref: "BusSchema", required: true },
});

// Virtual for route's URL
RouteSchema.virtual("url").get(function () {
  return `/api/routes/${this._id}`;
});

// Export model
module.exports = mongoose.model("Route", RouteSchema);
