const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contactType: {
    type: String,
    require: true,
    default: "Non-contacted",
  },
  notes: {
    type: String,
    required: true,
  },
  isSold: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("lead", leadSchema);
