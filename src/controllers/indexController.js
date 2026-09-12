// Controlador de la página de inicio.
// Más adelante: controllers/pedidosController.js con listar/crear/editar/borrar.

function home(req, res) {
  res.render('index', {
    titulo: 'Pedidos Restaurante',
  });
}

module.exports = { home };
