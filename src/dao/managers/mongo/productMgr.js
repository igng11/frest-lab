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
    }};

        // Guardar productos en el archivo
        async save(product) {
          try {
              const productCreated = await this.model.create(product);
              return productCreated;
          } catch (error) {
              throw error;
          }
      }};
  
  export default ProductManagerMongo;