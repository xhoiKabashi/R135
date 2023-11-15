const express = require("express");
const auth = require("./auth");
const app = express();
const bodyParser = require("body-parser");
const dbConnect = require("./db/dbConnect");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const User = require("./db/userModel");
const axios = require("axios");
const busModels = require("./models/busModels");
const BookingDetail = require("./models/bookingDetail");

app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

// Execute database connection
dbConnect();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.post("/register", (request, response) => {
  // Hash the password
  bcrypt
    .hash(request.body.password, 10)
    .then((hashedPassword) => {
      // Create a new user instance and collect the data
      const user = new User({
        name: request.body.name,
        lastName: request.body.lastName,
        email: request.body.email,
        password: hashedPassword,
      });

      // Save the new user
      user
        .save()
        .then((result) => {
          response.status(201).send({
            message: "User Created Successfully",
            result,
          });
        })
        .catch((error) => {
          console.error("Error saving user to the database:", error);
          response.status(500).send({
            message: "Error creating user",
            error,
          });
        });
    })
    .catch((e) => {
      console.error("Error hashing the password:", e);
      response.status(500).send({
        message: "Password was not hashed successfully",
        e,
      });
    });
});

// login endpoint
app.post("/login", (request, response) => {
  // check if email exists
  User.findOne({ email: request.body.email })

    // if email exists
    .then((user) => {
      // compare the password entered and the hashed password found
      bcrypt
        .compare(request.body.password, user.password)

        // if the passwords match
        .then((passwordCheck) => {
          // check if password matches
          if (!passwordCheck) {
            return response.status(400).send({
              message: "Passwords does not match",
              error,
            });
          }

          //   create JWT token
          const token = jwt.sign(
            {
              userId: user._id,
              userEmail: user.email,
            },
            "RANDOM-TOKEN",
            { expiresIn: "24h" }
          );

          //   return success response
          response.status(200).send({
            message: "Login Successful",
            email: user.email,
            token,
          });
        })
        // catch error if password does not match
        .catch((error) => {
          response.status(400).send({
            message: "Passwords does not match",
            error,
          });
        });
    })
    // catch error if email does not exist
    .catch((e) => {
      response.status(404).send({
        message: "Email not found",
        e,
      });
    });
});

function requireAuth(req, res, next) {
  const token = req.cookies.token;

  try {
    const user = decodeToken(token);
    req.user = user;
    next();
  } catch (err) {
    // Invalid token
  }
}

app.get("/user-data", auth, async (req, res) => {
  try {
    // You can access the user data from the request object, which was added by the checkAuth middleware
    const user = req.user;

    // Retrieve user data from the database or any other source
    const userData = await User.findOne({ email: user.userEmail });

    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }

    // Send the user data as the response
    res.status(200).json(userData);
  } catch (error) {
    console.error("Error retrieving user data:", error);
    res.status(500).json({ message: "Error retrieving user data", error });
  }
});

///////////////////////////////
// API endpoint to get available tickets

app.post("/api/routes", async (req, res) => {
  try {
    const {
      from,
      to,
      date,
      bus,
      fromTime,
      toTime,
      totalSeats,
      passengers,
      price,
    } = req.body;

    const newBus = new busModels({
      from,
      to,
      date,
      bus,
      fromTime,
      toTime,
      totalSeats,
      passengers,
      price,
    });

    // Save the flight
    await newBus.save();

    res.json({ success: true, bus: newBus });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/routes", async (req, res) => {
  try {
    const { from, to, date } = req.query;

    // Build a query object based on the provided parameters
    const query = {};
    if (from) {
      query.from = from;
    }
    if (to) {
      query.to = to;
    }
    if (date) {
      query.date = date;
    }

    // Use the query object to find flights that match the search criteria
    const routes = await busModels.find(query);

    res.json({ success: true, routes });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/routes/:busId", async (req, res) => {
  try {
    const bus = await busModels.findById(req.params.busId);
    res.json({ success: true, bus });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/tickets", async (req, res) => {
  try {
    const availableTickets = await BookingDetail.find({});
    res.json(availableTickets);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// API endpoint to book a ticket
app.post("/api/bookings", async (req, res) => {
  try {
    const {
      userId,
      from,
      to,
      date,
      bus,
      fromTime,
      toTime,
      group,
      passengerCount,
      passengers,
      price,
    } = req.body;

    // Check if the user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Create a new booking
    const newBooking = new BookingDetail({
      user: userId,
      from,
      to,
      date,
      bus,
      fromTime,
      toTime,
      group,
      passengerCount,
      passengers,
      price,
    });

    // Save the booking
    await newBooking.save();

    res.json({ success: true, booking: newBooking });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = app;
