import asyncHandler from 'express-async-handler';
import Audience from '../models/audienceModel.js';
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
export {
  authAudience,
  registerAudience,
  logoutAudience,
  getAudienceProfile,
  updateAudienceProfile,
};