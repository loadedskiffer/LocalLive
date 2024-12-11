import asyncHandler from 'express-async-handler';
import Audience from '../models/audienceModel.js';
import Event from '../models/eventModel.js';
import generateToken from '../utils/generateToken.js';

// @desc    Auth user & get token
// @route   POST /api/audience/auth
// @access  Public
const authAudience = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await Audience.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);

    res.json({
      _id: user._id,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

// @desc    Register a new user
// @route   POST /api/audience
// @access  Public
const registerAudience = asyncHandler(async (req, res) => {
  const { email, password, zipcode } = req.body;
  const userExists = await Audience.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }
  const user = await Audience.create({
    email,
    password,
    zipcode
  });
  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      email: user.email,
      zipcode: user.zipcode
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc    Logout user / clear cookie
// @route   POST /api/audience/logout
// @access  Public
const logoutAudience = (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: 'Logged out successfully' });
};

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getAudienceProfile = asyncHandler(async (req, res) => {
  const user = await Audience.findById(req.user._id);
  if (user) {
    res.json({
      _id: user._id,
      email: user.email,
      zipcode: user.zipcode
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateAudienceProfile = asyncHandler(async (req, res) => {
  const user = await Audience.findById(req.user._id);
  if (user) {
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }
    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      email: updatedUser.email,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});


// @desc    Get events for audience
// @route   GET /api/users/events
// @access  Private
const getAudienceEvents = asyncHandler(async (req, res) => {
  const allEvents = await Event.find({});
  if (allEvents) {
    res.json(allEvents);
  } else {
    res.status(404);
    throw new Error('error fetching events');
  }
});

const saveEvent = async (req, res) => {
  const { eventId } = req.body;
  const audienceId = req.user.id; // Assume you have audience ID from authentication middleware.

  try {
      const audience = await Audience.findById(audienceId);
      if (!audience) {
          return res.status(404).json({ message: "Audience not found" });
      }

      // Check if the event is already saved
      if (audience.savedEvents.includes(eventId)) {
          return res.status(400).json({ message: "Event already saved" });
      }

      // Validate if the event exists
      const event = await Event.findById(eventId);
      if (!event) {
          return res.status(404).json({ message: "Event not found" });
      }

      // Add the event to the savedEvents array
      audience.savedEvents.push(eventId);
      await audience.save();

      res.status(200).json({ message: "Event saved successfully", savedEvents: audience.savedEvents });
  } catch (error) {
      console.error("Error saving event:", error);
      res.status(500).json({ message: "Server error" });
  }
};

// @desc    Get list of artists
// @route   GET /api/artists
// @access  Public
const getArtists = asyncHandler(async (req, res) => {
  const artists = await Artist.find({});
  if (artists) {
    res.json(artists);
  } else {
    res.status(404);
    throw new Error('No artists found');
  }
});

// @desc    Get list of venues
// @route   GET /api/venues
// @access  Public
const getVenues = asyncHandler(async (req, res) => {
  const venues = await Venue.find({});
  if (venues) {
    res.json(venues);
  } else {
    res.status(404);
    throw new Error('No venues found');
  }
});


export {
  authAudience,
  registerAudience,
  logoutAudience,
  getAudienceProfile,
  updateAudienceProfile,
  getAudienceEvents,
  saveEvent,
  getArtists,
  getVenues
};