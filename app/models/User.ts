import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    id: { type: String, unique: true },
    email: { type: String },
    name: { type: String },
    image: { type: String },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
