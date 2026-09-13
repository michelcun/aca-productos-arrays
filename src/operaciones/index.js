// Lista de operaciones
const filtrarPorPrecio = require("./filtrarPorPrecio");
const calcularValorInventario = require("./calcularValorInventario");
const productoMayorStock = require("./productoMayorStock");
const filtrarPorCategoria = require("./filtrarPorCategoria");
const buscarPorId = require("./buscarPorId");
const agruparPorCategoria = require("./agruparPorCategoria");
// Exportamos todas las operaciones
module.exports = {
  filtrarPorPrecio,
  calcularValorInventario,
  productoMayorStock,
  filtrarPorCategoria,
  buscarPorId,
  agruparPorCategoria,
};