const mongoose = require("mongoose");

// schema
const UserSchema = new mongoose.Schema(
  {
    // attributes
    username: {
      type: String,
      required: true,
      maxlength: 30,
      minlength: 3,
      unique: true,
    },

    email: {
      type: String,
      required : true,
      maxlength: 50,
      unique: true,
    },
    password: {
      type: String,
      required : true,
      minlength: 6,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", UserSchema)