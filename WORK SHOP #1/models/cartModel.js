import mongoose from "mongoose";

import cartScheam from "../mongoSchema/cartSchema.js";

class CartModel {
  mongo_model;
  constructor() {
    this.mongo_model = mongoose.model("carts", cartScheam);
  }
  async getAllCartOrders() {
    const cartOrders = await this.mongo_model.find();
    return cartOrders;
  }
  async addToCart(cartData) {
    const cart = new this.mongo_model(cartData);
    await cart.save();
  }
}

export default CartModel;
