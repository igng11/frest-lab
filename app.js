import express from "express";
import { config } from "./src/config/config.js";
import { connectBD } from "./src/config/dbConnection.js";
import { engine } from "express-handlebars";
import { homeRouters } from "./src/routes/home.routes.js";
import { productsRouters } from "./src/routes/product.routes.js";
import { __dirname } from "./utils.js";
import path from 'path'; 

const app = express();
// const port = 8084;
const port = process.env.PORT || 3000; // Puerto 3000 como defecto
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

//conexion a la base de datos
connectBD();

app.use("/", homeRouters);
app.use("/", productsRouters);