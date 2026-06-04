const express = require("express");

const app = express ();

app.get("/",(req, res) => {
    res.send("Bienvenido a Proyecto Palma");
});

app.get("/login",(req, res) => {
    res.send("Pagina de Login");
});

app.get("/tareas",(req, res) => {
    res.send("Pagina de Tareas");
});

app.listen(3000, () =>{
    console.log("Servidor inicido en puerto 3000");
});