// backend/server.js
const express = require("express");
const bodyParser = require("body-parser");
const usuarioRoutes = require("./routes/usuarioRoutes");
const rolRoutes = require("./routes/rolRoutes");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/roles", rolRoutes);
app.use("/api/usuarios", usuarioRoutes);

// ruta base
app.get("/", (req, res) => {
  res.json({ message: "API Funeraria - funcionando" });
});

module.exports = app;
