import ProdctModel from "../models/productsModel.js";

const productModal = new ProdctModel();

class ProdctsController {
  async getAllProducts() {
    const products = await productModal.getAllProducts();
    return products;
  }
  async addProduct(productData) {
    await productModal.addProduct(productData);
  }
  async getProductById(productId) {
    const product = await productModal.getProductById(productId);
    return product;
  }
  async updateProduct(productId, productData) {
    await productModal.updateProduct(productId, productData);
  }
  async deleteProduct(productId) {
    await productModal.deleteProduct(productId);
  }
}
export default ProdctsController;
