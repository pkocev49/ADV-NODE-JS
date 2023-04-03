import mongoose from "mongoose";

import productSchema from "../mongoSchema/productSchema.js";

class ProductModel {
  mongo_model;
  constructor() {
    this.mongo_model = mongoose.model("products", productSchema);
  }
  async getAllProducts() {
    const products = await this.mongo_model.find();
    return products;
  }
  async getProductById(productId) {
    const product = await this.mongo_model.findById(productId);
    return product;
  }
  async getProductByName(keyword) {
    const product = await this.mongo_model.find({
      name: { $regex: keyword },
    });

    return product;
  }
  async addProduct(productData) {
    const product = new this.mongo_model(productData);
    await product.save();
  }
}
export default ProductModel;
