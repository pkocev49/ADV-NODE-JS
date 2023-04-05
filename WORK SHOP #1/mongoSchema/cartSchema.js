import mongoose from "mongoose";
const { Schema } = mongoose;

const cartScheam = new Schema({
  order_data: {
    type: String,
  },
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: "carts",
    },
  ],
  purchase: {
    type: Boolean,
  },
});
export default cartScheam;
