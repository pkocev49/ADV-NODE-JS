import * as dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const MONGO_URL = process.env.MONGO_URL;

export const mongo_connection = async () => {
  try {
    await mongoose.connect(MONGO_URL, {
      dbName: "food_app",
    });
    console.log("Connected do MONGODB...");
  } catch (err) {
    throw new Error("Connection to Mongo failed");
  }
};
