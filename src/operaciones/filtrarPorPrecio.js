// Función que recibe un array de productos
// y devuelve solo los que tienen precio mayor al mínimo indicado.
// Por defecto el mínimo es 100000 (según el enunciado).
function filtrarPorPrecio(productos, precioMinimo = 100000) {
    // filter recorre el array y deja solo los que cumplen la condición
    return productos.filter((producto) => producto.precio > precioMinimo);
  }
  
  // Exportamos la función para poder usarla en otros archivos
  module.exports = filtrarPorPrecio;