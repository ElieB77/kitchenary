import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    isEmail: true,
    trim: true,
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
  recipes: [
    {
      recipeId: Number,
      recipeTitle: String,
      recipeImageType: String,
    },
  ],
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
