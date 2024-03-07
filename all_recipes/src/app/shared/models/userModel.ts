import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    isEmail: true,
    allowNull: false,
  },
  password: {
    type: String,
    required: true,
    allowNull: false,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  verificationToken: {
    type: String,
    unique: true,
    allowNull: true,
  },
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
