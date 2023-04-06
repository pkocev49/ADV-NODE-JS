import mongoose from "mongoose";

import orderSchema from "../mongo_schemas/orderSchema.js";

class OrderModel {
  monog_model;
  constructor() {
    this.monog_model = mongoose.model("Order", orderSchema);
  }
  async getAllOrders() {
    const orders = await this.monog_model
      .find()
      .populate("items")
      .populate("costumer_id");
    return orders;
  }
  async getOrderById(orderId) {
    const order = await this.monog_model
      .findById(orderId)
      .populate("items")
      .populate("costumer_id");
    return order;
  }
  async addOrder(orderData) {
    const order = new this.monog_model(orderData);
    await order.save();
  }
  async deleteOrder(orderId) {
    await this.monog_model.findByIdAndDelete(orderId);
  }
}

export default OrderModel;
