const Event = require("../model/event.model");
const User = require("../../user/model/user.model");

const createEvent = async (type, details, timestamp, organizer) => {
  const result = await Event.create({
    type,
    details,
    timestamp,
    organizer,
  });
  return result;
};

const getEvents = async () => {
  const allEvents = await Event.find();
  return allEvents;
};

const getEventById = async (id) => {
  const event = await Event.findOne({ _id: id });
  return event;
};

module.exports = {
  createEvent,
  getEvents,
  getEventById,
};
