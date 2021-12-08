const express = require("express"),
  app = express(),
  env = require("dotenv/config"),
  mongoose = require("mongoose");

// Global Middlawares
app.use(express.json()); // Parse json request/response

// Routes
const login = require("./routes/login");
app.use("/api", login);

const users = require("./routes/users");
app.use("/api", users);

// Server
app.listen("3000", () => {
  console.log("Sever is running!!!!!!");
});

// Data Base Conexion
mongoose.connect(process.env.DB_URL, (err) =>
  err
    ? console.log(`Data Base Conexion Error - ${err}`)
    : console.log("Data Base Conected")
);
