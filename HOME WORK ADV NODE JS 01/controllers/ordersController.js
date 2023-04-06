import OrderModel from "../models/orderModel.js";
const orderModel = new OrderModel();

class OrdersController {
  async getAllOrders(req, res) {
    const orders = await orderModel.getAllOrders();
    res.send(orders);
  }
  async getOrderById(req, res) {
    const orderId = req.params.id;
    const order = await orderModel.getOrderById(orderId);
    res.send(order);
  }
  async addOrder(req, res) {
    const { costumerId } = req.body;
    const { productIds } = req.body;
    const orderData = {
      order_data: new Date().toLocaleDateString(),
      items: productIds,
      costumer_id: costumerId,
    };
    await orderModel.addOrder(orderData);
    res.status(201).send({ message: "Order was created" });
  }
  async deleteOrder(req, res) {
    const orderId = req.params.id;
    await orderModel.deleteOrder(orderId);
    res.send({ message: `Order with id: ${orderId} was deleted` });
  }
}
export default OrdersController;
