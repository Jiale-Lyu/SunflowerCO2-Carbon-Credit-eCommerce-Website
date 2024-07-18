import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    displayName: {
      type: String,
    },
    state: {
      type: String,
    },
    showcaseCredits: {
      type: Boolean,
      default: false,
    },
    claimedCredits: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Match user entered password to hashed password in database
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Encrypt password using bcrypt before saving a document to database
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  // If it has not been modified, calls next() to proceed with the save operation without encrypting the password again.

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);

export default User;
