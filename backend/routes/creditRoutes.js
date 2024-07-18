import express from 'express';
const router = express.Router();
import {
  claimCredit,
  getMyClaimedCredits,
  getCreditById,
  getCredits,
} from '../controllers/creditController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').post(protect, claimCredit).get(getCredits);
// router.route('/').post(protect, claimCredit).get(protect, admin, getCredits);
router.route('/mycredits').get(protect, getMyClaimedCredits);
router.route('/:id').get(protect, getCreditById);

export default router;
