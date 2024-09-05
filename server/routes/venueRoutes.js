// routes pertaining to artists
import express from 'express';
import {
  authVenue,
  registerVenue,
  logoutVenue,
  getVenueProfile,
  updateVenueProfile,
  createEvent
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
  // .get(protect, getEvents)
  .post(protect, createEvent)

export default router;