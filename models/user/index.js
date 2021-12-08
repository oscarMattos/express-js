const mongoose = require("mongoose");

const User = mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: [true, "User email required"],
    type: String,
    unique: true,
    validate: {
      validator: (value) =>
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value),
      message: (props) => `${props.value} is not a valid email!`,
    },
  },
  password: {
    required: true,
    type: String,
  },
  date: {
    default: Date.now(),
    type: Date,
  },
});

module.exports = mongoose.model("User", User);
