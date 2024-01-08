import { productDao } from "../dao/managers/index.js";

export class HomeController{
    static getHomeProducts = async(req,res)=>{
        try{
            const products = await productDao.get();
            res.json({status:"success",data:products})
        }catch(error){
            console.error(error.message);
            res.json({status:"error",message:"Hubo un error al obtener los productos"});
        }
    }
}