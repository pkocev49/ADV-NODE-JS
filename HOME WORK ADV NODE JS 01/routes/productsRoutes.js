import { Router } from "express";
import ProdctsController from "../controllers/productsController.js";

const productRouter = Router();

const productController = new ProdctsController();

productRouter.get("/", async (req, res) => {
  const products = await productController.getAllProducts();
  res.send(products);
});

productRouter.post("/", async (req, res) => {
  const { name, description, price } = req.body;

  const productData = {
    name: name,
    description: description,
    price: price,
  };

  await productController.addProduct(productData);

  res.status(201).send({ message: "New product is created" });
});

productRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  const product = await productController.getProductById(id);
  res.send(product);
});
productRouter.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const { name, description, price } = req.body;

  const productData = {
    name: name,
    description: description,
    price: price,
  };
  try {
    await productController.updateProduct(id, productData);
    res.send({ message: `Products wiht id:${id} was updated` });
  } catch (err) {
    res.status(404).send({ message: err.message });
  }
});
productRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await productController.deleteProduct(id);
  res.send(`Product with id: ${id} was deleted`);
});

export default productRouter;
