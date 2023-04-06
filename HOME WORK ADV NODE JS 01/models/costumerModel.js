import mongoose from "mongoose";
const { ObjectId } = mongoose.Types;
const { Types } = mongoose;

import costumerSchema from "../mongo_schemas/costumerSchema.js";

class Costumer {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.refreshToken = [];
  }
}

class CostumerModel {
  mongo_model;
  constructor() {
    this.mongo_model = mongoose.model("Costumer", costumerSchema);
  }
  async getAllCostumers() {
    const costumers = await this.mongo_model.find();
    return costumers;
  }
  async getCostumerById(costumerId) {
    const costumer = await this.mongo_model.findById(costumerId);

    return costumer;
  }
  async addCostumer(costumerData) {
    const costumer = new this.mongo_model(costumerData);
    await costumer.save();
  }
  async updateCostumer(costumerId, costumerData) {
    const costumer = await this.mongo_model.findById(costumerId);

    await this.mongo_model.updateOne(
      { _id: costumerId },
      {
        name: costumerData.name || costumer.name,
        email: costumerData.email || costumer.email,
        address: costumerData.address || costumer.address,
        street: costumerData.street || costumer.street,
        city: costumerData.city || costumer.city,
        country: costumerData.country || costumer.country,
        zip: costumerData.zip || costumer.zip,
      }
    );
  }
  async deleteOrder(costumerId) {
    await this.mongo_model.findByIdAndDelete(costumerId);
  }
}

export default CostumerModel;
