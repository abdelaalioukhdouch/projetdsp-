const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
    },
    address: {
      type: String,
      required: false,
      default: "",
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.index({ "$**": "text" });

module.exports = mongoose.model("User", userSchema);
