import mongoose from "mongoose";
import cartScheam from "../mongoSchema/cartSchema.js";

class CartModel {
  mongo_model;
  constructor() {
    this.mongo_model = mongoose.model("carts", cartScheam);
  }
  async getAllCartOrders() {
    const cartOrders = await this.mongo_model.find({ purchase: false });
    return cartOrders;
  }
  async addToCart(cartData) {
    const cart = new this.mongo_model(cartData);
    await cart.save();
  }
  async purchaseItem(cartId, updateCart, removeItem) {
    const cartItem = await this.mongo_model.findById(cartId);
    if (!cartId) {
      throw new Error(`Cart item with ID ${cartId} not found`);
    }
    await this.mongo_model.findOneAndUpdate(
      { _id: cartId, purchase: false },
      {
        purchase: true,
      },
      { new: true }
    );
    const remove = await this.mongo_model.findByIdAndDelete(removeItem);
    return remove;
  }
  async redirectItem() {
    const cartOrders = await this.mongo_model.find({ purchase: true });

    return cartOrders;
  }
}
export default CartModel;
