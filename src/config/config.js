import dotenv from "dotenv";
dotenv.config();

export const config = {
    server:{
        port:8084,
        secretSesion: "FrestPass"
    // port:process.env.PORT,
    // secretSession:process.env.SECRET_SESSION
},
// fileSystem:{
//     productFile:"product.json",
//     cartFile:"cart.json"
// },
mongo:{
    url:"mongodb+srv://labfrest:uINcVGinxHo9Ecyu@frest-lab.astkwlt.mongodb.net/Frest-lab?retryWrites=true&w=majority",
    // url:process.env.MONGO_URL
    serums:"mongodb+srv://labfrest:uINcVGinxHo9Ecyu@frest-lab.astkwlt.mongodb.net/Frest-lab?retryWrites=true&w=majority"
    }
}