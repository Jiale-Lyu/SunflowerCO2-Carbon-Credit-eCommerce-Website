import asyncHandler from '../middleware/asyncHandler.js';
import Credit from '../models/creditModel.js';
import User from '../models/userModel.js';

// @desc    Claim a credit
// @route   POST /api/credits
// @access  Private
const claimCredit = asyncHandler(async (req, res) => {
  const { code } = req.body;

  // Find the credit by code and check if it's already claimed
  const credit = await Credit.findOne({ code });

  if (!credit) {
    res.status(404);
    throw new Error('Credit code is invalid');
  }

  if (credit.isClaimed) {
    res.status(400);
    throw new Error('Credit code has already been registered');
  }

  // Link the credit to the user and mark it as claimed
  credit.user = req.user._id;
  credit.isClaimed = true;
  await credit.save();

  // Update user's claimedCredits
  const user = await User.findById(req.user._id);
  user.claimedCredits += 1;
  await user.save();

  res.status(200).json({
    message: 'Credit registered successfully',
    credit,
  });
});

// @desc    Get logged in user's claimed credits
// @route   GET /api/credits/mycredits
// @access  Private

const getMyClaimedCredits = asyncHandler(async (req, res) => {
  const credits = await Credit.find({ user: req.user._id, isClaimed: true });
  const totalCredits = credits.length; // Since each credit code represents 1 ton

  res.json({
    credits,
    totalCredits,
  });
});

// @desc    Get credit by ID
// @route   GET /api/credits/:id
// @access  Private
const getCreditById = asyncHandler(async (req, res) => {
  const credit = await Credit.findById(req.params.id).populate(
    'user',
    'name email'
  );

  if (credit) {
    res.json(credit);
  } else {
    res.status(404);
    throw new Error('Credit not found');
  }
});

// @desc    Get all claimed credits
// @route   GET /api/credits
// @access  Private/Admin
const getCredits = asyncHandler(async (req, res) => {
  const credits = await Credit.find({ isClaimed: true }).populate(
    'user',
    'id name displayName state email'
  );
  res.json(credits);
});

export { claimCredit, getMyClaimedCredits, getCreditById, getCredits };
