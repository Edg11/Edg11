//console.log("Hola mundo dese nodejs")
const express =require('express');
const mongoose = require('mongoose');


const app = express();
const router = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//conexion a base de datos
mongoose.connect("mongodb+srv://prog_web:toor@clusterprogweb.qovekwh.mongodb.net/?retryWrites=true&w=majority");


//operaciones crud




app.listen(3000,() => {
    console.log("servidor corriendo en el puerto 3000")
});