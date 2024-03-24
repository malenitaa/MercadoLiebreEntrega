const express = require("express")
const app = express()
const path = require("path")

/*Imágenes*/
const rutaPublic = path.resolve(__dirname, "./public") 
app.use(express.static(rutaPublic))

//Levantamos el servidor, puerto 3010
app.listen(3010, () => {console.log("Levantó che!")})

//Home
app.get("/", (req, res) =>
{console.log("Se accedió a la página principal");
res.sendFile(path.join(__dirname, "views/home.html"));
})
//Register
app.get("/register", (req, res) =>
{console.log("Se accedió a la página de registro");
res.sendFile(path.join(__dirname, "views/register.html"));
})
//Login
app.get("/login", (req, res) =>
{console.log("Se accedió a la página de inicio de sesión");
res.sendFile(path.join(__dirname, "views/login.html"));
})
