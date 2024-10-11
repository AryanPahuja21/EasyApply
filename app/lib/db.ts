import mongoose from "mongoose";

let isConnected = false;

export const connectToDatabase = async () => {
  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    const { connection } = await mongoose.connect(process.env.DB_URI || "");

    isConnected = connection.readyState === 1;
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("Failed to connect to MongoDB");
  }
};
