import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, unique: true },
    image: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
