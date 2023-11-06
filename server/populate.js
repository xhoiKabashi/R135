const defaultRoutes = [
  {
    origin: "London",
    destination: "Berlin",
    buses: [
      { time: "08:00 AM", seats: 30 },
      { time: "10:30 AM", seats: 15 },
      { time: "02:00 PM", seats: 10 },
      { time: "05:30 PM", seats: 5 },
    ],
  },
  {
    origin: "London",
    destination: "Paris",
    buses: [
      { time: "09:00 AM", seats: 25 },
      { time: "11:30 AM", seats: 20 },
      { time: "03:00 PM", seats: 10 },
      { time: "06:30 PM", seats: 2 },
    ],
  },
  {
    origin: "Berlin",
    destination: "Paris",
    buses: [
      { time: "07:30 AM", seats: 35 },
      { time: "09:45 AM", seats: 25 },
      { time: "01:15 PM", seats: 10 },
      { time: "04:45 PM", seats: 8 },
    ],
  },
];

async function insertDefaultRoutes() {
  try {
    await Route.deleteMany({});
    await Route.insertMany(defaultRoutes);
    console.log("Default routes inserted successfully");
  } catch (error) {
    console.error("Error inserting default routes:", error);
  } finally {
    mongoose.connection.close();
  }
}

insertDefaultRoutes();
