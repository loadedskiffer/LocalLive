import asyncHandler from 'express-async-handler';
import Venue from '../models/venueModel.js';
import Event from '../models/eventModel.js';
import Artist from '../models/artistModel.js';
import generateToken from '../utils/generateToken.js';

// @desc    Auth user & get token
// @route   POST /api/Venue/auth
// @access  Public
const authVenue = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await Venue.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

// @desc    Register a new user
// @route   POST /api/Venue
// @access  Public
const registerVenue = asyncHandler(async (req, res) => {
  const { name, email, password, address } = req.body;
  const userExists = await Venue.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }
  const user = await Venue.create({
    name,
    email,
    password,
    address
  });
  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc    Logout user / clear cookie
// @route   POST /api/audience/logout
// @access  Public
const logoutVenue = (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: 'Logged out successfully' });
};

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getVenueProfile = asyncHandler(async (req, res) => {
  const user = await Venue.findById(req.user._id);
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      address: user.address
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateVenueProfile = asyncHandler(async (req, res) => {
  const user = await Venue.findById(req.user._id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }
    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

const createEvent = asyncHandler(async (req, res) => {
  const { name, artist, date, time, needsTickets, creator, venue, pending, jointEvent } = req.body;
  const artistId = await Artist.findOne({ name: artist });
  const eventExists = await Event.findOne({ name });
  if (eventExists) {
    res.status(400);
    throw new Error('already created an event with this name');
  }
  const event = await Event.create({
    name,
    date,
    time,
    creator,
    artist: artistId,
    venue,
    needsTickets,
    pending,
    jointEvent
  });
  if (event) {
    //add this event to venues array
    res.status(201).json({
      success: true
    });
  } else {
    res.status(400);
    throw new Error('Invalid event data');
  }
});

// @desc    Edit an event
// @route   PUT /api/venue/events/:eventId
// @access  Private
const editEvent = asyncHandler(async (req, res) => {
  const { eventId } = req.params;
  const { name, date, time, artist, venue, needsTickets, pending, jointEvent } = req.body;

  const event = await Event.findById(eventId);

  if (!event) {
    res.status(404);
    throw new Error('Event not found');
  }

  // Update the event fields
  event.name = name || event.name;
  event.date = date || event.date;
  event.time = time || event.time;
  event.artist = artist || event.artist;
  event.venue = venue || event.venue;
  event.needsTickets = needsTickets || event.needsTickets;
  event.pending = pending || event.pending;
  event.jointEvent = jointEvent || event.jointEvent;

  const updatedEvent = await event.save();

  res.json({
    success: true,
    event: updatedEvent,
  });
});


export {
  authVenue,
  registerVenue,
  logoutVenue,
  getVenueProfile,
  updateVenueProfile,
  createEvent,
  editEvent
};