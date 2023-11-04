const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: [true, "role is required"],
      enum: ["travellar", "organization"],
    },
    name: {
      type: String,
      required: function () {
        if (this.role === "travellar") {
          return true;
        }
        return false;
      },
    },
    organizationName: {
      type: String,
      required: function () {
        if (this.role === "organization") {
          return true;
        }
        return false;
      },
    },
    email: {
      type: String,
      required: [true, "E-mail is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    website: {
      type: String,
    },
    address: {
      type: String,
      required: [true, "Address is required"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("userModel", userSchema);

