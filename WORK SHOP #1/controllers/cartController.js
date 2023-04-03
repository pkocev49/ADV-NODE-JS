import CartModel from "../models/cartModel.js";

const cartModel = new CartModel();

class CartController {
  async getAllCartItems(req, res) {
    const cartItems = await cartModel.getAllCartOrders();
    res.send(cartItems);
  }
  async addToCart(req, res) {
    const { productIds } = req.body;
    const cartData = {
      order_data: new Date().toLocaleDateString(),
      items: productIds,
    };
    await cartModel.addToCart(cartData);
    res.status(201).send({ message: "Item addet to cart " });
  }
}

export default CartController;
