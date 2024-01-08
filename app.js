import express from "express";
import exphbs from 'express-handlebars';
import { engine } from "express-handlebars";
import { homeRouters } from "./src/routes/home.routes.js";
import { __dirname } from "./utils.js";
import path from 'path'; 

const app = express();
const port = 3000;
app.listen(port,()=>console.log(`Server ${port}`));

//mildwares
app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({ extended: true }));
// Middleware para imprimir información sobre las vistas
app.use((req, res, next) => {
    console.log('Vista solicitada:', req.url);
    next();
  });  
//configuracion de handlebars
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
// console.log('Directorio de vistas:', path.join(__dirname, 'views'));
app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view cache', false);


app.use("/home", homeRouters);



// Ejemplo de modelo de datos (debes configurar según tus necesidades)
const products = {
    find: async () => {
      // Simulación de obtener la lista de productos
      return [
        { name: 'Producto 1', price: 20 },
        { name: 'Producto 2', price: 30 },
        { name: 'Producto 3', price: 25 }
      ];
    }
  };


// Ruta para la página de inicio que muestra la lista de productos
app.get('/home', async (req, res) => {
    try {
      // Obtener la lista de productos (simulado)
      const productList = await products.find();

      // Renderizar la vista 'home' con los productos
      res.render('home', { productos: productList });
    } catch (error) {
      console.error('Error al obtener la lista de productos:', error);
      res.status(500).send('Error interno del servidor');
    }
  });