import {ProductManagerMongo} from "../managers/mongo/productMgr.js"

const productDao = new ProductManagerMongo();

export {productDao};