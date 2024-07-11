const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      trim: true,
      maxlength: 500,
    },
    timestamp: {
      type: Date,
      required: true,
    },
    organizer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", 
      required: true,
    },
    participants: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }]
  },
  {
    timestamps: true, // Adds createdAt and updatedAt timestamps
  }
);

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
