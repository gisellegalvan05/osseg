//e.g server.js
import express from "express";
import ViteExpress from "vite-express";
import cors from 'cors';
import nonovedadRoute from './src/routes/nonovedadRoutes.js'
import internos from './src/routes/noinfutilRoutes.js'

const app = express();

app.use(cors());
app.use(express.json())

// Route to get all news
app.use(nonovedadRoute);
app.use(internos);

//const PORT = process.env.PORT || 3000;

//     // Route to get all news
// app.get("/novedad/:id", (req,res)=>{
//     db.query("SELECT * FROM nonovedad WHERE NONovID=id", (err,result)=>{
//         if(err) {
//         console.log(err)
//         } 
//     res.send(result)
//     });   });
    

ViteExpress.listen(app, 3000, () => console.log("Server is listening..."));