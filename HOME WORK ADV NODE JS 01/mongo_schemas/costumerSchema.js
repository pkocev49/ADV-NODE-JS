import mongoose from "mongoose";

const { Schema } = mongoose;
const costumerSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  address: {
    street: String,
    city: String,
    country: String,
    zip: Number,
  },
});

export default costumerSchema;
