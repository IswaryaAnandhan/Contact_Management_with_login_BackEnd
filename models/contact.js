const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
    },
    dob: {
      type: Date,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    occupation: {
      type: String,
    },
    company: {
      type: String,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);
