import express from 'express';
import {
  authUser,
  forgotPassword,
  resetPassword,
  getResetPasswordPage,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from '../controllers/userController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(registerUser).get(getUsers);
// router.route('/').post(registerUser).get(protect, admin, getUsers);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router
  .route('/profile')
  .get(protect, getUserProfile) //protect middleware is going to run whenever we hit this route
  .put(protect, updateUserProfile);
router
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);
router.route('/forgotpassword').post(forgotPassword);
router
  .route('/resetpassword/:id/:token')
  .get(getResetPasswordPage)
  .post(resetPassword);

export default router;
