const mongoose = require("mongoose");

// schema
const UserSchema = new mongoose.Schema(
  {
    // attributes
    username: {
      type: string,
      require: true,
      max: 30,
      min: 3,
      unique: true,
    },

    email: {
      type: string,
      require: true,
      max: 50,
      unique: true,
    },
    password: {
      type: string,
      required,
      min: 6,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", UserSchema)