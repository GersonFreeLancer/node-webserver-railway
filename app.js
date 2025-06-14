const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080; // Valor por defecto si no hay .env

// Configuración del motor de plantillas handlebars (hbs)
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Middleware para servir archivos estáticos desde la carpeta "public"
app.use(express.static('public'));

// Rutas

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Armando David',
    titulo: 'Curso de Node'
  });
});

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Armando David',
    titulo: 'Curso de Node'
  });
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Armando David',
    titulo: 'Curso de Node'
  });
});

app.get('/salidas', (req, res) => {
  res.render('salidas', {
    nombre: 'Armando David Espinoza',
    titulo: 'Curso de Node'
  });
});

// Ruta para cualquier otra página no encontrada (404)
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
});

// Levantar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
