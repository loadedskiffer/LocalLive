// routes pertaining to artists
import express from 'express';
import {
  authVenue,
  registerVenue,
  logoutVenue,
  getVenueProfile,
  updateVenueProfile,
  createEvent,
  editEvent,
  getEvents
} from '../controllers/venueController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', registerVenue);
router.post('/auth', authVenue);
router.post('/logout', logoutVenue);

router
  .route('/profile')
  .get(protect, getVenueProfile)
  .put(protect, updateVenueProfile);

router
  .route('/events')
  .get(protect, getEvents)    // This route gets the events for the venue (optional, based on your needs)
  .post(protect, createEvent);

router
  .route('/events/:eventId')
  .put(protect, editEvent)    // Edit an event by eventId
  .get(protect, getEvent)     // If you need to view a single event (optional)
  .delete(protect, deleteEvent); // If you plan to allow event deletion (optional)

export default router;
