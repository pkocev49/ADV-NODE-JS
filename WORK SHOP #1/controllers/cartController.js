import CartModel from "../models/cartModel.js";
const cartModel = new CartModel();

class CartController {
  async getAllCartItems(req, res) {
    const cartItems = await cartModel.getAllCartOrders();
    res.send(cartItems);
  }
  async addToCart(req, res) {
    const { productIds, purchase } = req.body;
    const cartData = {
      order_data: new Date().toLocaleDateString(),
      items: productIds,
      purchase: purchase,
    };
    await cartModel.addToCart(cartData);
    res.status(201).send({ message: "Item addet to cart " });
  }

  async purchaseItem(req, res) {
    const cartId = req.params.id;
    const removeItem = req.params.id;
    const updateCart = req.params.updateCart;
    const { purchase } = req.body;
    if (purchase === "true") {
      try {
        const updatedItem = await cartModel.purchaseItem(
          cartId,
          updateCart,
          removeItem
        );

        if (!updatedItem) {
          return res
            .status(404)
            .send(
              `Cart item with ID ${cartId} not found or has already been purchased.`
            );
        }

        res.redirect("/cart/itemHistory");
      } catch (err) {
        console.log(err);
        res.status(500).send("Internal server error");
      }
    }
  }
  async getOrderHistory(req, res) {
    const cartItems = await cartModel.redirectItem();
    res.send(cartItems);
  }
}

export default CartController;
