import CostumerModel from "../models/costumerModel.js";
const costumerModel = new CostumerModel();

class CostumerController {
  async getAllCostumers(req, res) {
    const costumers = await costumerModel.getAllCostumers();
    res.send(costumers);
  }
  async getCostumerById(req, res) {
    try {
      const costumerId = req.params.id;
      const costumer = await costumerModel.getCostumerById(costumerId);
      res.send(costumer);
    } catch (err) {
      res.status(404).send({ message: `The id dose not exist` });
    }
  }
  async addCostumer(req, res) {
    const {
      name,
      email,
      phone,
      address: { street, country, city, zip },
    } = req.body;
    const costumerData = {
      name: name,
      email: email,
      phone: phone,
      address: {
        street: street,
        country: country,
        city: city,
        zip: zip,
      },
    };
    await costumerModel.addCostumer(costumerData);
    res.status(201).send({ message: "Costumer created" });
  }
  async updateCostumer(req, res) {
    const costumerId = req.params.id;
    console.log(costumerId);

    const {
      name,
      email,
      phone,
      address: { street, country, city, zip },
    } = req.body;
    const costumerData = {
      name: name,
      email: email,
      phone: phone,
      address: {
        street: street,
        country: country,
        city: city,
        zip: zip,
      },
    };
    try {
      await costumerModel.updateCostumer(costumerId, costumerData);
      res.send({ message: `Costumer  wiht id:${costumerId} was updated` });
    } catch (err) {
      res.status(404).send({ message: err.message });
    }
  }
  async deleteCostumer(req, res) {
    const costumerId = req.param.id;
    await costumerModel.deleteOrder(costumerId);
    res.send({ message: `Costumer with id: ${costumerId} was deleted` });
  }
}

export default CostumerController;
