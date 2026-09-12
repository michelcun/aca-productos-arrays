require('dotenv').config();

const path = require('path');
const express = require('express');
const { initDb } = require('./config/db');
const indexRoutes = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3000;

// Base de datos (crea data/pedidos.db y la tabla si no existen)
initDb();

// Vistas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'views'));

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

// Rutas
app.use('/', indexRoutes);

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
