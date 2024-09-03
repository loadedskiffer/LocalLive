// routes pertaining to artists
import express from 'express';
import {
  authArtist,
  registerArtist,
  logoutArtist,
  getArtistProfile,
  updateArtistProfile,
} from '../controllers/artistController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', registerArtist);
router.post('/auth', authArtist);
router.post('/logout', logoutArtist);
router
  .route('/profile')
  .get(protect, getArtistProfile)
  .put(protect, updateArtistProfile);

export default router;