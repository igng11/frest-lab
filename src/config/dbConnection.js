import mongoose from "mongoose";
import { config } from "./config.js";

export const connectBD = async() =>{
    try {
        await mongoose.connect(config.mongo.url);
        console.info("DB conected");
    } catch (error) {
        console.info(`Error el conectar la DB ${error.message}`);
    }
}