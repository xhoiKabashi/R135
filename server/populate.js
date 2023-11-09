const mongoose = require("mongoose");
const Route = require("./models/route"); // Import your Mongoose model for Route
const Bus = require("./models/bus"); // Import your Mongoose model for Bus
const BusSeat = require("./models/seat"); // Import your Mongoose model for BusSeats

async function seedData() {
  try {
    // Create buses
    const bus1 = new Bus({
      timeOfDeparture: 1600, // Replace with your departure time
      timeOfArrival: 1800, // Replace with your arrival time
      seats: ["A1", "A2", "B1", "B2"],
    });

    const bus2 = new Bus({
      timeOfDeparture: 1400, // Replace with your departure time
      timeOfArrival: 1600, // Replace with your arrival time
      seats: ["C1", "C2", "D1", "D2"],
    });

    // Save buses to the database
    const savedBus1 = await bus1.save();
    const savedBus2 = await bus2.save();

    // Create bus seats
    const busSeat1 = new BusSeat({
      bus: savedBus1._id,
      status: "Available", // You can set the initial status
    });

    const busSeat2 = new BusSeat({
      bus: savedBus2._id,
      status: "Available", // You can set the initial status
    });

    // Save bus seats to the database
    await busSeat1.save();
    await busSeat2.save();

    // Create a route that references a bus
    const route = new Route({
      origin: "City A",
      arrival: "City B",
      bus: savedBus1._id, // Reference to the first bus created
    });

    // Save the route to the database
    await route.save();

    console.log("Data added successfully.");
  } catch (error) {
    console.error("Error adding data:", error);
  } finally {
    // Close the MongoDB connection
    mongoose.connection.close();
  }
}

seedData();
