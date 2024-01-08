import { productMongoDB } from "../dao/managers/index.js";

        // Ejemplo de modelo de datos (debes configurar según tus necesidades)
        const products = {
            find: async () => {
              // Simulación de obtener la lista de productos
              return [
                { name: 'Producto r1', price: 20 },
                { name: 'Producto 2', price: 30 },
                { name: 'Producto 3', price: 25 }
              ];
            }
          };

export class HomeController{
    static getHomeProducts = async(req,res)=>{
        try{
            const products = await productMongoDB.get();
            res.json({status:"success",data:products})
        }catch(error){
            console.error(error.message);
            res.json({status:"error",message:"Hubo un error al obtener los productos"});
        }
    }

// Ruta para la página de inicio que muestra la lista de productos
static getStartProducts = async (req, res) => {

    try {
      // Obtener la lista de productos (simulado)
    //   const productList = await products.find();

    const products = await productMongoDB.get();
    // res.json({status:"success",data:products})

      // Renderizar la vista 'home' con los productos
    //   res.render('home', { productos: productList });

      res.render('home', { productos: products });
    } catch (error) {
      console.error('Error al obtener la lista de productos:', error);
      res.status(500).send('Error interno del servidor');
    }
  };
}