import { productsModel } from "../../models/product.model.js";

export class ProductManagerMongo {
  constructor() {
    this.model = productsModel;
  };

    async get() {
    try {
        const products = await this.model.find().lean(); //lean convierte el bison a json
        // console.debug(products);
        return products;
    } catch (error) {
        throw error;
    }}
};