const express = require('express');
const indexController = require('../controllers/indexController');

const router = express.Router();

// Por ahora solo la home. Aquí irán las rutas del CRUD de pedidos.
router.get('/', indexController.home);

module.exports = router;
