import ProductModel from "../models/productsModel.js";
const productModel = new ProductModel();

class ProductController {
  async getProducts(req, res) {
    const products = await productModel.getAllProducts();
    res.send(products);
  }
  async getProductById(req, res) {
    try {
      const productId = req.params.id;
      const product = await productModel.getProductById(productId);
      res.send(product);
    } catch (err) {
      res.status(404).send({ message: `The id dose not exist` });
    }
  }
  async getProductByName(req, res) {
    const keyword = req.query.name;

    try {
      const product = await productModel.getProductByName(keyword);

      res.send(product);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  }
  async addProduct(req, res) {
    const { name, description, price, reviews } = req.body;
    const productData = {
      name: name,
      description: description,
      price: price,
      reviews: reviews,
    };
    await productModel.addProduct(productData);
    res.status(201).send({ message: "Product created" });
  }
  async addReview(req, res) {
    const productId = req.params.id;

    const {
      reviews: { rating, comment },
    } = req.body;
    const productData = {
      reviews: {
        rating: rating,
        comment: comment,
      },
    };
    try {
      await productModel.addReview(productId, productData);
      res.send({ message: `Added reviw to product with id:${productId}` });
    } catch (error) {
      res.status(404).send({ message: error.message });
    }
  }
}

export default ProductController;
