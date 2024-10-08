const mongoose = require("mongoose");

// schema
const PinSchema = new mongoose.Schema(
  {
    // attributes
    username: {
      type: String,
      required: true,
      
    },

    title : {
      type: String,
      required: true,
      minlength:3,
    },
    desc : {
      type: String,
      required : true,
      minlength: 3,
    },
    rating : {
        type : Number,
        required : true,
        min : 0,
        max : 5,
    },
    lat : {
        type : Number,
        required : true,
    },
    long : {
        type : Number,
        required : true,
    }
  },
  { timestamps: true }
);
module.exports = mongoose.model("Pin", PinSchema)