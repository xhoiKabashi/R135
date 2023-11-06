const express = require("express");
const auth = require("./auth");
const app = express();
const bodyParser = require("body-parser");
const dbConnect = require("./db/dbConnect");
const User = require("./db/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const Route = require("./models/route");

// Body parser configuration
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

// routes/routes.js

// Add a new route to get bus details and seat availability based on departure time

// app.get("/bus-details/:departureTime", async (req, res) => {
//   const { departureTime } = req.params;

//   try {
//     // Find the route with the matching departure time
//     const route = await Route.findOne({
//       "buses.time": departureTime,
//     });

//     if (!route) {
//       return res.status(404).json({ message: "Bus not found" });
//     }

//     // Extract the specific bus details based on departure time
//     const bus = route.buses.find((b) => b.time === departureTime);

//     // You can also check the availability of seats in this route if you have seat data.
//     // Add seat availability information here.

//     res.json({
//       route: {
//         origin: route.origin,
//         destination: route.destination,
//       },
//       bus: {
//         time: bus.time,
//         seats: bus.seats, // Include the actual seat availability here
//       },
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server Error" });
//   }
// });

app.get("/api/routes", async (req, res) => {
  const routes = await Route.find({});
  res.json(routes);
});

module.exports = app;