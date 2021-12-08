const express = require("express"),
  app = express(),
  env = require("dotenv/config"),
  mongoose = require("mongoose");

// Global Middlawares
app.use(express.json()); // Parse json request/response

// Routes
const login = require("./routes/login"),
  token = require("./routes/token"),
  users = require("./routes/users");

app.use("/api", [login, token, users]); 

// Server
app.listen("3000", (err, res) =>
  err
    ? console.log(`Server Conexion Error - ${err}`) 
    : console.log(`Sever is running`)
);

// Data Base Conexion
mongoose.connect(process.env.DB_URL, (err, res) =>
  err
    ? console.log(`Data Base Conexion Error - ${err}`)
    : console.log("Data Base Conected")
);
