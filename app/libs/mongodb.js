import mongoose from "mongoose";
require('dotenv').config();

const connectMongoDB = async () => {
    try {
        if (!process.env.DB_URI) {
          throw new Error("MongoDB URI is not defined in the environment variables.");
        }
      
        console.log("Attempting to connect to MongoDB:", process.env.DB_URI);
        await mongoose.connect(process.env.DB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          // Add any other options here
        });
        console.log("Connected to MongoDB.");
      } catch (error) {
        console.error("Error connecting to MongoDB:", error);
      }}

export default connectMongoDB;