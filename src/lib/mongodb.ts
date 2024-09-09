import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return; // Already connected
    }

    await mongoose.connect(
      process.env.MONGO_URI || "mongodb://localhost:27017/urlshort"
    );
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
  }
};

export default connectMongo;
