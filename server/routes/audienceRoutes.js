// routes pertaining to normal users (audience members)
import express from 'express';
import {
  authAudience,
  registerAudience,
  logoutAudience,
  getAudienceProfile,
  updateAudienceProfile,
} from '../controllers/audienceController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', registerAudience);
router.post('/auth', authAudience);
router.post('/logout', logoutAudience);
router
  .route('/profile')
  .get(protect, getAudienceProfile)
  .put(protect, updateAudienceProfile);

export default router;